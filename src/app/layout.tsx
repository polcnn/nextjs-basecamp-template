import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import clsx from "clsx";

import "@/config/timezone";
import "@/styles/globals.css";

export const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NextJS Basecamp Template",
  description:
    "A production-ready Next.js starter template with TypeScript, React Compiler, best practices, and essential features built-in.",
};

interface IProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<IProps>) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          kanit.variable,
          "font-(family-name:--font-kanit) text-[14px] lg:text-[16px] font-light antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
