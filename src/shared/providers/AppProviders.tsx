"use client";

import { type PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/theme/theme";
import ReduxProvider from "./ReduxProvider";

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default AppProviders;
