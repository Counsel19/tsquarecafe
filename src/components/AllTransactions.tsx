import { FC } from "react";
import TransactionRecord from "./TransactionRecord";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Download, Search } from "lucide-react";

interface AllTransactionsProps {}
const AllTransactions: FC<AllTransactionsProps> = ({}) => {
  return (
    <div>
      <div className="flex justify-between items-center text-sm my-6">
        <div className="flex gap-3">
          <Input type="search" placeholder="Search here" />
          <Button className="text-xs">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <Button className="text-xs" variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export to CSV
        </Button>
      </div>
      <div className="space-y-2">
        <TransactionRecord />
        <TransactionRecord />
        <TransactionRecord />
        <TransactionRecord />
      </div>
    </div>
  );
};

export default AllTransactions;
