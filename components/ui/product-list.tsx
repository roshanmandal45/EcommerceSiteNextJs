
'use client';



import  { useState } from "react";
import Stripe from "stripe";
import { ProductCard } from "./product-card";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [search, setSearch] = useState<string>("");

  const filteredProduct = products.filter((product) => {
    const term = search.toLowerCase();
    const nameMatch = product.name.toLocaleLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLocaleLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });
  return (
    <div className=" ">
      <div className="flex justify-center items-center p-4">
        <input
        value={search}
        onChange={(e) => setSearch (e.target.value)}
          className="border outline-0 w-1/4 text-gray-950 placeholder:text-gray-900 p-2 rounded-sm"
          type="text"
          placeholder="Search Products...."
        />
      </div>

      <ul className="flex gap-x-20 flex-wrap w-full justify-center items-center">
        {filteredProduct.map((product) => {
          const price = product.default_price as Stripe.Price; // ✅ HERE

          return (
            <li className="w-1/4 " key={product.id}>
              <ProductCard product={product} price={price} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
