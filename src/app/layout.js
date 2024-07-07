import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamad Zubi - Full Stack Developer",
  description:
    " Mohamad Zubi - software engineer, full stack developer, and open-source contributor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
