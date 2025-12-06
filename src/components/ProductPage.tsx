import type { Product } from "@/types/product";
import { Star } from "lucide-react";
export const ProductPage = ({ product }: { product: Product }) => {
  return (
    <div className=" w-full flex   rounded-2xl   py-4 px-4">
      <div className="w-4/6 h-full flex justify-center items-center  ">
        <img src={product.image} className="w-auto h-auto max-h-100" />
      </div>
      <div className="flex flex-col justify-center  gap-3 px-6">
        <p className="text-teal-900 text-xl font-medium content-center">
          {product.title}
        </p>
        <p className="text-teal-900 font-bold">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <p className="text-lg">{product.description}</p>
        <p className=" font-semibold text-3xl ">${product.price}</p>
        <div className="flex gap-1 items-center flex-row-reverse pr-10">
          <Star />
          <span className="text-sm font-medium text-[#8A8A8A]">
            {product.rating.rate}
          </span>
          <span className="mr-2 text-[#7a7979] font-medium">
            ({product.rating.count})
          </span>
        </div>
        <button className=" hover:cursor-pointer border-2 border-[#D7D7D7] rounded-[25px] px-4 py-2.5 w-40 hover:bg-red-400 hover:text-white hover:border-[#ffffff] ">
          Add
        </button>
      </div>
    </div>
  );
};
