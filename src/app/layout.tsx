import type { Metadata } from "next";
import { type PropsWithChildren } from "react";

import AppProviders from "@/shared/providers/AppProviders";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Favorite Books",
  description: "Manage your favorite books",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
