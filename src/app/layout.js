import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import Transition from "@/components/ui/Transition";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira",
});

export const metadata = {
  title: "Mohamad Zubi - Full Stack Developer",
  description:
    "Mohamad Zubi - software engineer, full stack developer, and open-source contributor.",
};

const getCookies = async () => {
  const cookieStore = cookies();
  const theme = cookieStore?.get("theme")?.value || "dark";
  return theme;
};

export default async function RootLayout({ children }) {
  const theme = await getCookies();

  return (
    <html
      lang="en"
      className={`${firaCode.variable} ${
        theme == "dark" ? "dark" : ""
      } scroll-smooth`}
    >
      <body
        className={`${inter.className} text-lightText bg-primaryLightBg dark:bg-primaryDarkBg dark:text-darkText`}
      >
        <Header />
        <Transition>{children}</Transition>
        <Analytics />
      </body>
    </html>
  );
}
