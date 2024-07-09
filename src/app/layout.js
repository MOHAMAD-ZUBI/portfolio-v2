import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import Transition from "@/components/ui/Transition";

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

function setInitialTheme() {
  const theme = document.cookie
    .split("; ")
    .find((row) => row.startsWith("theme="));
  if (theme && theme.split("=")[1] === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaCode.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              ${setInitialTheme.toString()}
              setInitialTheme();
            })();
          `,
          }}
        />
      </head>
      <body
        className={`${inter.className} text-lightText bg-primaryLightBg dark:bg-primaryDarkBg dark:text-darkText`}
      >
        <Header />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
