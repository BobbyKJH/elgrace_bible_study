import React from "react";
import Bible from "@/type/Bible";

const PageLayout: React.FC<Bible.Layout> = ({ children }) => {
  return <main className="min-h-[calc(100vh-5rem)]">{children}</main>;
};

export default PageLayout;
