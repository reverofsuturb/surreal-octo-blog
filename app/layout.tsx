import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Surrealist Octopus",
  description: "Dreams are what you make of them",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
