import NavBar from "@/components/NavBar";
import "./globals.css";
import { Footer } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-black">
        <NavBar />
        <div className="bg-white">
          <div className="mx-auto max-w-7xl ">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
