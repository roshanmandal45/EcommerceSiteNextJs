"use client";

import  { useEffect, useState } from "react";


import type Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}
export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;
  return (
    <Card>
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative w-full h-64">
          <Image
            alt={currentProduct.name ?? "Product image"}
            src={currentProduct.images[0]}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-100 text-white font-bold p-4">
            <p className="text-4xl font-semibold">{currentProduct.name}</p>
            {price && price.unit_amount && (
              <p className="text-xl font-bold">${(price.unit_amount / 100).toFixed(2)}</p>
            )}
          </div>
        </div>
      )}
      
    </Card>
  );
};
