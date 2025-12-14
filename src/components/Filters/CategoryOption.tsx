import { SelectItem } from "@/components/ui/select";

export const CategoryOption = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <SelectItem
      value={value}
      className="hover:text-red-500 hover:cursor-pointer outline-0"
    >
      {children}
    </SelectItem>
  );
};
