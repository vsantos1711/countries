import type { Metadata } from "next";
import "../styles/globals.css";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Providers from "../components/Providers";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Head />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
