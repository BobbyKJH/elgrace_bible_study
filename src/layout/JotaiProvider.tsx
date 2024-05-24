"use client";
import React from "react";

import { Provider } from "jotai";

import Bible from "@/type/Bible";

const JotaiProvider: React.FC<Bible.Layout> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default JotaiProvider;
