import type { Metadata } from "next";
import { type PropsWithChildren } from "react";

import ReduxProvider from "@/shared/providers/ReduxProvider";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Favorite Books",
  description: "Manage your favorite books",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
