import { Moon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function DarkModeButton() {
  return (
    <Toggle
      aria-label="Toggle DarkMode"
      size="lg"
      variant="outline"
      className="data-[state=on]:bg-gray-600 data-[state=on]:*:[svg]:fill-gray-600 data-[state=on]:*:[svg]:stroke-white *: "
    >
      <Moon />
    </Toggle>
  );
}
