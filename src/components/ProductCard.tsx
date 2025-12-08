import type { Product } from "../types/product";
export default function ProductCard({ product }: { product: Product }) {
  const productRef = `/products/${product.id}`;
  return (
    <div className=" w-9/12 h-128 flex flex-col border-2 border-[#D7D7D7] gap-2 py-4 rounded-2xl px-4">
      <a href={productRef}>
        <div className="w-full h-85 flex justify-center items-center py-5 ">
          <img src={product.image} className="w-auto h-85 max-h-100" />
        </div>
        <p className="text-[#535353] mt-1 ">{product.category}</p>
        <p className="text-teal-900 text-lg font-medium line-clamp-2 min-h-22 content-center pb-5">
          {product.title}
        </p>
        <span className="text-teal-900 text-lg ">${product.price}</span>
      </a>
    </div>
  );
}
