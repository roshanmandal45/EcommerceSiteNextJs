"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClasses =
    "relative px-2 py-1 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow px-20">
      <div className="container mx-auto h-12 px-4 flex items-center justify-between">
        
       
        <div className="font-bold text-xl">
          <Link href="/">My Ecommerce</Link>
        </div>

      
        <div className="hidden md:flex gap-x-10">
          <Link href="/" className={navLinkClasses}>Home</Link>
          <Link href="/products" className={navLinkClasses}>Products</Link>
          <Link href="/checkout" className={navLinkClasses}>Checkout</Link>
        </div>
 
 <div>

 </div>
       
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow px-4 py-3 flex flex-col gap-3">
          <Link href="/" className={navLinkClasses} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" className={navLinkClasses} onClick={() => setOpen(false)}>Products</Link>
          <Link href="/checkout" className={navLinkClasses} onClick={() => setOpen(false)}>Checkout</Link>
        </div>
      )}
    </nav>
  );
}
