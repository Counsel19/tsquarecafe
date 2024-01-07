import { db } from "@/lib/db";
import { NextRequest } from "next/server";
import { transactionValidator } from "@/lib/validators/transaction";
import { getAuthSession } from "@/lib/auth";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const isFilter = req.nextUrl.searchParams.get("filter");
  let transactionSummary = {};
  try {
    if (isFilter) {
      let result = await db.transaction.groupBy({
        by: "status",
        _count: true,
      });

      let successTransactions = 0;
      let pendingsTransactions = 0;
      let failedTransactions = 0;

      result.forEach((item) => {
        if (item.status === "SUCCESS") {
          successTransactions = item._count;
        }
        if (item.status === "PENDING") {
          pendingsTransactions = item._count;
        }
        if (item.status === "FAILED") {
          failedTransactions = item._count;
        }
      });

      transactionSummary = {
        totalTransactions:
          successTransactions + pendingsTransactions + failedTransactions,
        successTransactions,
        pendingsTransactions,
        failedTransactions,
      };
    } else {
      transactionSummary = await db.transaction.findMany({
        include: {
          slipType: true,
        },
      });
    }

    return new Response(JSON.stringify(transactionSummary), { status: 200 });
  } catch (error) {
    return new Response("Could not get transactions, Please try again", {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { type, slipType, status } = transactionValidator.parse(body);
  try {
    const session = await getAuthSession();
    if (!session || !session?.user) {
      return new Response("You Must be Logged in to access this", {
        status: 401,
      });
    }

    const slip = await db.slipType.findFirst({
      where: {
        title: slipType,
      },
    });

    if (!slip) {
      return new Response("Invalid slip type selected, Please try again", {
        status: 400,
      });
    }

    const user = await db.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    if (user && user.accountBalance < slip.price) {
      return new Response("Insufficient Balance, Please Credit your account ", {
        status: 401,
      });
    }

    const newTransaction = await db.transaction.create({
      data: {
        type,
        slipId: slip?.id,
        status,
        price: slip?.price,
        userId: session.user.id,
      },
    });

    return new Response(
      JSON.stringify({ id: newTransaction.id, slipId: newTransaction.slipId }),
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("invalid Request Data", { status: 422 });
    }

    return new Response("Could not post to transaction, Please try again", {
      status: 500,
    });
  }
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();

  const { transactionId, slipId, reference } = z
    .object({
      transactionId: z.string(),
      slipId: z.string(),
      reference: z.string(),
    })
    .parse(body);
  try {
    const session = await getAuthSession();

    if (!session || !session?.user) {
      return new Response("You Must be Loge din to access this", {
        status: 401,
      });
    }
    await db.transaction.update({
      where: {
        id: transactionId,
      },
      data: {
        status: "SUCCESS",
        reference: reference,
      },
    });

    const slip = await db.slipType.findFirst({
      where: {
        id: slipId,
      },
    });

    if (!slip) {
      return new Response("Invalid Request, Please try again", {
        status: 400,
      });
    }

    const user = await db.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    if (!user)
      return new Response("Invalid Login Credentials", {
        status: 401,
      });

    await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        accountBalance: user.accountBalance - slip.price,
      },
    });

    return new Response("OK", {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("invalid Request Data", { status: 422 });
    }

    return new Response("Could not post to transaction, Please try again", {
      status: 500,
    });
  }
}
