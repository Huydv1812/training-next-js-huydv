import { Footer } from "../footer";
import { Header } from "../header";
import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="wrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
