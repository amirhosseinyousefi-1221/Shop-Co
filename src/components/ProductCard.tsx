import { Link } from "@tanstack/react-router";
import type { IProduct } from "../types/product";
export default function ProductCard({ product }: { product: IProduct }) {
  const productRef = `/products/${product.id}`;
  return (
    <div className=" w-11/12 h-128 flex flex-col border-2 border-[#D7D7D7] gap-2 py-4 rounded-2xl px-4 content-self-center ">
      <Link to={productRef}>
        <div className="w-full h-85 flex justify-center items-center py-5 ">
          <img src={product.images[0]} className="w-auto h-85 max-h-100" />
        </div>
        <p className="text-[#535353] mt-1 ">{product.category.name}</p>
        <p className="text-teal-900 text-lg font-medium line-clamp-2 min-h-22 content-center pb-5">
          {product.title}
        </p>
        <span className="text-teal-900 text-lg ">${product.price}</span>
      </Link>
    </div>
  );
}
