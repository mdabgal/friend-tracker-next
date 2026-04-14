"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const validRoutes = ["/", "/timeline", "/stats"];
  const isNotFound = !validRoutes.includes(pathname);

  return (
    <>
      {!isNotFound && <Navbar />}

      <main className="flex-1">
        {children}
      </main>

      {!isNotFound && <Footer />}
    </>
  );
}