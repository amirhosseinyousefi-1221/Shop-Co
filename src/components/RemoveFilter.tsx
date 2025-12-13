import clsx from "clsx";
import { CircleX } from "lucide-react";

type RemoveFilterProps<T> = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  resetCategory: string;
};

function RemoveFilter<T>({
  category,
  setCategory,
  resetCategory,
}: RemoveFilterProps<T>) {
  return (
    <CircleX
      className={clsx(
        "mt-4 hover:cursor-pointer",
        category ? "block" : "hidden"
      )}
      onClick={() => setCategory(resetCategory)}
      strokeWidth={1.5}
      color="red"
      size={30}
    />
  );
}

export default RemoveFilter;
