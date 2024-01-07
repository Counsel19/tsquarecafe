"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { toast } from "@/hooks/use-toast";
import { setTransaction } from "@/lib/redux/slices/transactionSlice";
import { setUser } from "@/lib/redux/slices/userSlice";
import axios from "axios";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

interface layoutProps {
  children: React.ReactNode;
}
const Layout: FC<layoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userInfo = await axios.get("/api/users/single");
        const transactions = await axios.get("/api/transactions/");
        dispatch(setUser(userInfo.data));
        dispatch(setTransaction(transactions.data));
      } catch (error) {
        return toast({
          title: "Somthing went wrong",
          description: "Unable to get user information",
          variant: "destructive",
        });
      }
    };

    getUserInfo();
  }, []);

  return (
    <div className="bg-slate-200 p-2">
      <div className="flex gap-2 ">
        <div className="lg:min-w-[220px] min-h-screen">
          <Sidebar />
        </div>

        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
