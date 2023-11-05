import React from "react";
export default function Layout({ children }) {
  return (
    <div className="container" style={{ maxWidth: "370px" }}>
      {children}
    </div>
  );
}
