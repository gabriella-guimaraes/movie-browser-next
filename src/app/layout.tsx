import type { Metadata } from "next";
import { type_main } from "@/functions/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Browser",
  description: "Movie Browser is a platform designed by film fans to film fans. Movie Browser is more than just a movie catalog; it's a personalized guide to the seventh art. Browse through a vast selection of movies spanning different genres, decades, and cultures. Find detailed information about the cast, directors, ratings, user reviews, and more, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.svg" />
      </head>
      <body className={type_main.variable}>
        {children}
      </body>
    </html>
  );
}
