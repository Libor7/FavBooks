import type { Metadata } from "next";
import { type PropsWithChildren } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Favorite Books",
  description: "Manage your favorite books",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
