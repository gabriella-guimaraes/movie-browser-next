import type { Metadata } from "next";

//Styles
import { type_main, type_second } from "@/functions/fonts";
import "./globals.css";

//Components
import Header from "@/components/organisms/header/header";
import { SearchProvider } from "@/context/search-context";

//Contexts

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
        <link rel="icon" href="/assets/icon.svg" />
      </head>
      <body className={`${type_main.variable} ${type_second.variable}`}>
        <SearchProvider>
          <div className="App">
            <Header />
            <main className="AppBody">
              {children}
            </main>
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
