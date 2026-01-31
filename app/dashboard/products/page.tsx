import { ProductList } from '@/components/ui/product-list';
import { stripe } from '@/lib/stripe';
import React from 'react'

const Products = async () => {
   const products = await stripe.products.list({
      expand: ["data.default_price"],
    
    });
  return (
    <div>
      <h1 className='flex justify-center items-center p-2 text-2xl font-medium'>All Products</h1>
      <ProductList products={products.data}/>
    </div>
  )
}

export default Products
