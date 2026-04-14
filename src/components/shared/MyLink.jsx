"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded ${
        isActive ? "bg-[#244D3f] text-white font-bold" : "text-[#64748B] font-medium"
      }`}
    >
      {children}
    </Link>
  );
}