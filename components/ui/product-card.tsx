import Link from 'next/link';
import React from 'react'
import Stripe from 'stripe';
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from 'next/image';
import { Button } from './button';
 interface Props {
    product: Stripe.Product;
    price:Stripe.Price;
}

export const ProductCard = ({product,price} : Props) =>  {
  return (
    
   
     <Link href={'/products/1'}>
   <Card>
 {product.images && product.images[0] && (
        <div className="relative w-full h-64">
          <Image
            alt={product.name ?? "Product image"}
            src={product.images[0]}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <CardHeader className=''>{product.name}</CardHeader>
      <CardContent className='mt-[-12]'>{product.description}</CardContent>
      <CardContent className='mt-[-12]'> 
            {price && price.unit_amount && (
              <p className="text-xl font-bold">${(price.unit_amount / 100).toFixed(2)}</p>
            )}</CardContent>
           <Button className='text-white active:scale-95'>View More</Button>
   </Card>
     
     </Link>
   
  );
}
