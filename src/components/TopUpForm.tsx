"use client";

import { FC, useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface TopUpFormProps {}
const TopUpForm: FC<TopUpFormProps> = ({}) => {
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = async () => {};
  return (
    <div className="p-6 bg-white rounded-lg">
      <h4 className="text-xl font-semibold mb-3">Top Up Form</h4>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          type="number"
        />
        <Button type="submit">Initiate Top Up</Button>
      </form>
    </div>
  );
};

export default TopUpForm;
