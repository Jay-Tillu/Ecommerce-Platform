import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { truncateTitle } from "@/utils/utilities";

const ProductCard = ({ productTitle, productPrice, productImage }) => {
  const truncatedTitle = truncateTitle(productTitle);
  return (
    <div className="border border-[#CFCFCF] shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-md pt-10 pb-5 px-5 md:py-10 md:pt-10">
      <img className="h-56 w-full" src={productImage} alt="Card Image" />

      <h1 className="font-bold mt-7">{truncatedTitle}</h1>

      <div className="flex flex-row items-center justify-between pt-4">
        <div>
          <p className="text-stone-400">Price:</p>
          <p className="font-semibold"> {productPrice}</p>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="bg-[#FFD814] hover:bg-yellow-400 outline-none border-none shadow-sm"
        >
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
