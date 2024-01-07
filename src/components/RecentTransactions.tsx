"use client";

import { FC } from "react";
import TransactionRecord from "./TransactionRecord";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

interface RecentTransactionsProps {}
const RecentTransactions: FC<RecentTransactionsProps> = ({}) => {
  const { transactions } = useSelector(
    (store: RootState) => store.transactions
  );

  return (
    <div className="bg-white rounded-lg col-span-3 p-4">
      <h4 className="font-semibold mb-4">Recent Transaction</h4>
      <div className="space-y-2">
        {transactions.length > 0 &&
          transactions
            .slice(0, 5)
            .map((transaction) => (
              <TransactionRecord key={transaction.id} {...transaction} />
            ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
