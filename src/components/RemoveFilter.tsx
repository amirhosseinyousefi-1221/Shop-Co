import clsx from "clsx";
import { CircleX } from "lucide-react";

type RemoveFilterProps<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  resetValue: T;
};

function RemoveFilter<T>({
  value,
  setValue,
  resetValue,
}: RemoveFilterProps<T>) {
  return (
    <CircleX
      className={clsx("mt-4 hover:cursor-pointer", value ? "block" : "hidden")}
      onClick={() => setValue(resetValue)}
      strokeWidth={1.5}
      color="red"
      size={30}
    />
  );
}

export default RemoveFilter;
