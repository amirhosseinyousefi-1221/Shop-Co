import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { RatingFilter } from "./RatingFilter";

export const Filters = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="border w-35/100 max-w-70 ml-5 rounded-2xl pl-3  py-2 flex flex-col gap-5 items-center ">
      <span className="text-2xl">Filters :</span>
      <CategoryFilter category={category} setCategory={setCategory} />
      <PriceFilter />
      <RatingFilter />
    </div>
  );
};
