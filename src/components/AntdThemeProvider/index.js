"use client";
import React from "react";
import { ConfigProvider } from "antd";

function AntdThemeProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF5344",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdThemeProvider;
