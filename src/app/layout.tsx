import type { Metadata } from "next";
import { type PropsWithChildren } from "react";
import { Provider } from "react-redux";

import store from "@/store";
import "./globals.css";

export const metadata: Metadata = {
  title: "Favorite Books",
  description: "Manage your favorite books",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
