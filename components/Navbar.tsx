import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-4 h-12 flex justify-between items-center ">
      <div className="container mx-auto flex justify-between items-center ">
       
        <div className="font-bold text-xl">
          <Link href="/">My Ecommerce</Link>
        </div>

        <div className="flex gap-x-10">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/checkout">Checkout</Link>
        </div>
        <div>

        </div>
      </div>
    </nav>
  );
}
