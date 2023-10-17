import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppContextProvider } from "../components/_providers/app-provider";
import "./globals.css";
import { SessionProvider } from "@/context/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cam app",
  description: "cameras system",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <body className={`${inter.className} bg-slate-900`}>
        <AppContextProvider>
          <SessionProvider>{children}</SessionProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
