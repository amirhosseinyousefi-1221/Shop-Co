import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import { Minus, Plus, Star, Trash } from "lucide-react";
import { useState } from "react";
const buttonStyles =
  "hover:cursor-pointer border rounded-3xl hover:bg-red-400 hover:text-white select-none";
export const ProductPage = ({ product }: { product: Product }) => {
  const [count, setCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleIsLiked = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
  };
  return (
    <div className=" w-full flex rounded-2xl py-4 px-4">
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
          <Star
            className={cn(
              "hover:cursor-pointer select-none",
              isLiked ? "text-red-500 fill-red-500" : "fill-white"
            )}
            size={28}
            onClick={handleIsLiked}
          />
          <span className="text-sm font-medium text-[#8A8A8A]">
            {product.rating.rate}
          </span>
          <span className="mr-2 text-[#7a7979] font-medium">
            ({product.rating.count})
          </span>
        </div>
        {count ? (
          <>
            <span className="text-lg text-teal-900">
              Place Order for : <span className="font-bold">{count}</span>
            </span>
            <div className="flex gap-10 items-center">
              <Plus
                className={buttonStyles}
                size={40}
                strokeWidth={1}
                onClick={() => setCount(count + 1)}
              />
              <button
                className=" hover:cursor-pointer border rounded-3xl py-2 px-8 hover:bg-red-400 hover:text-white select-none "
                onClick={() => setCount(0)}
              >
                <Trash />
              </button>
              <Minus
                className={buttonStyles}
                size={40}
                strokeWidth={1}
                onClick={() => setCount(count - 1)}
              />
            </div>
          </>
        ) : (
          <button
            className=" hover:cursor-pointer border rounded-3xl py-2 px-8 hover:bg-red-400 hover:text-white select-none"
            onClick={() => setCount(1)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
