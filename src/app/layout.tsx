import ReduxProvider from "@/redux/provider/ReduxProvider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simorgh Service - Solution For Your Company",
  description: "Solution For Your Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${openSans.variable} antialiased`}>
        <ReduxProvider>
          <div className="">{children}</div>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
