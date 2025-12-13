// SkeletonCard.tsx
export default function ProductSkeleton() {
  return (
    <div className="w-11/12 min-w-88 h-128 flex flex-col border-2 border-[#D7D7D7] py-4 rounded-2xl px-4 animate-pulse content-self-center ">
      <div className="w-full h-85 flex justify-center items-center py-5 ">
        <div className="w-full h-85 bg-gray-200 rounded" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mt-2" />
      <div className="h-6 bg-gray-200 rounded w-2/3 mt-2" />
      <div className="h-6 bg-gray-200 rounded w-1/4 mt-2" />
      <div className="h-6 bg-gray-200 rounded w-1/8 mt-10" />
    </div>
  );
}
