import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SED | Strategy for Environmental Development Foundation",
  description:
    "Strategy for Environmental Development (SED) is founded in Bangladesh in light of the motto “Save the Environment, Save Your Existence”. Bangladesh is the country currently affected heavily from the cause of climate change. Also, some man-made causes damage the environment of the Country. Global warming and change of weather patterns originated many complications and affected both directly and indirectly the whole environment with its ecology.",

  openGraph: {
    title: "SED | Strategy for Environmental Development Foundation",
    description:
      "Strategy for Environmental Development (SED) is founded in Bangladesh in light of the motto “Save the Environment, Save Your Existence”. Bangladesh is the country currently affected heavily from the cause of climate change. Also, some man-made causes damage the environment of the Country. Global warming and change of weather patterns originated many complications and affected both directly and indirectly the whole environment with its ecology.",
    url: "https://sedbd.org",
    siteName: "SED | Strategy for Environmental Development Foundation",
    images: [
      {
        url: "https://sed-foundation.vercel.app/logo.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
