import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Avukat Ali Gumus" },
  description: "Avukat Ali Gumus Burosu Diyarbakir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
