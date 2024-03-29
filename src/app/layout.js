import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingIcons from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fariha Rana's Portfolio",
  description: "nextjs fullstack develpoer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <Navbar/>
        <div className="fixed max-[1024px]:hidden bg -z-50 h-screen">
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
            <FloatingIcons />
          </div>
        <main>{children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
