"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Preloader from "@/components/other/Preloader";
// @ts-ignore
import React, { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     setLoading(false);
  });

  return (
      <div
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
          {loading && <Preloader />}
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
      </div>
  );
}
