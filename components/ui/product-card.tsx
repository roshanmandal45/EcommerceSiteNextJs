import Link from 'next/link';
import React from 'react'
import Stripe from 'stripe';
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from 'next/image';
 interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({product} : Props) =>  {
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
      <CardHeader>{product.name}</CardHeader>
      <CardContent>{product.description}</CardContent>
      {/* <CardContent> 
            {price && price.unit_amount && (
              <p className="text-xl font-bold">${(price.unit_amount / 100).toFixed(2)}</p>
            )}</CardContent> */}
   </Card>
     
     </Link>
   
  );
}
