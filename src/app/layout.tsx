import React from "react";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import JotaiProvider from "@/layout/JotaiProvider";
import ReactQueryProvider from "@/layout/ReactQueryProvider";

import Bible from "@/type/Bible";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elgrace_Bible_Study",
  description: "Elgrace Bible Study",
};

const RootLayout: React.FC<Bible.Layout> = ({ children }) => {
  return (
    <html lang="en">
      <JotaiProvider>
        <body className={inter.className}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
      </JotaiProvider>
    </html>
  );
};

export default RootLayout;
