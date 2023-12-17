import type { Metadata } from "next";
import "../styles/globals.css";
import Head from "./head";

export const metadata: Metadata = {
  title: "Countries app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      {children}
    </html>
  );
}
