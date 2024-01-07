import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session)
      return new Response("You must login to access this", { status: 401 });

    const user = await db.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {}
}
