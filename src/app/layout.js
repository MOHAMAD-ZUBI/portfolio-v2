import { Inter, Acme, Ubuntu, Manrope, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira",
});

export const metadata = {
  title: "Mohamad Zubi - Full Stack Developer",
  description:
    " Mohamad Zubi - software engineer, full stack developer, and open-source contributor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${firaCode.variable}`}>
      <body
        className={`${inter.className} text-lightText bg-primaryLightBg dark:bg-primaryDarkBg dark:text-darkText `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
