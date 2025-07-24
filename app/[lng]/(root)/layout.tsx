import { ChildProps } from "@/types";
import React from "react";
import Navbar from "./_components/navbar";

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
