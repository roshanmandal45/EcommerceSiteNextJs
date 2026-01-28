import Carosel from "@/components/Carosel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  const firstProductImage = products.data[0]?.images[0];

  return (
    <div>
      <section className="flex justify-center items-center ">
        <div className="flex justify-center items-center bg-gray-200 p-8 w-[70%] overflow-hidden">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold pb-2">Welcome to My Ecommerce</h2>
            <p className="text-sm pb-2">Discover the Latest Products at best prices.</p>
            <Button asChild variant="default">
              <Link href="/product">Browse Products</Link>
            </Button>
          </div>
          <div className="w-1/2">
{firstProductImage && (
            <Image
              alt="Banner"
              src={firstProductImage}
              width={350}
              height={50}
            />
          )}
          </div>
          
        </div>
      </section>
      <section>
        <Carosel/>
      </section>
    </div>
  );
};

export default Home;
