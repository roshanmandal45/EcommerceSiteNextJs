import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
     <nav className='sticky top-0 z-50 container mx-auto flex justify-between items-center py-1 px-8 shadow min-h-12'>
    <div className=''>
        <Link href="/">My Ecommerce</Link>
    </div>
    <div className='flex gap-x-10'>
        <Link href="">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
    </div>
    <div>

    </div>
   </nav>
  )
}
