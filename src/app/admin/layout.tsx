import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}
const layout: FC<layoutProps> = ({ children }) => {
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

export default layout;
