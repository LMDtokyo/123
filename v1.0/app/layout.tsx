import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
      </div>
  );
}
