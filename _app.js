import { Labrada, Lancelot, Nova_Cut } from "next/font/google";
import "./globals.css";

const labrada = Labrada({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-labrada",
});
const lancelot = Lancelot({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lancelot",
});
const novaCut = Nova_Cut({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nova-cut",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${labrada.variable} ${lancelot.variable} ${novaCut.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
