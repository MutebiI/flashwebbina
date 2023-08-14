// "use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Just from "./Just";
// export const revalidate = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Just>{children}</Just>
       
      </body>
    </html>
  );
}
