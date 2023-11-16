import { FC } from "react";
import TransactionRecord from "./TransactionRecord";

interface RecentTransactionsProps {}
const RecentTransactions: FC<RecentTransactionsProps> = ({}) => {
  return (
    <div className="bg-white rounded-lg col-span-3 p-4">
      <h4 className="font-semibold mb-4">Recent Transaction</h4>
      <div className="space-y-2">
        <TransactionRecord />
        <TransactionRecord />
        <TransactionRecord />
        <TransactionRecord />
      </div>
    </div>
  );
};

export default RecentTransactions;
