import React from "react";

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="AppContainer">
      <div className="AppContainer__Content">{children}</div>
    </div>
  );
};