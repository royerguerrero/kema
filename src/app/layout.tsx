import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const IBMPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans-condensed",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Kema. La herramienta aliada para conseguir tus logros mediante tu alimentación",
  description:
    "Cansado por no ver avances?. Kema es la solución perfecta para llevar tu alimentación al siguiente nivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${IBMPlexSansCondensed.variable} font-inter antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
