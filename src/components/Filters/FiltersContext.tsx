import React, { createContext, useContext, useState, useEffect } from "react";

type FiltersState = {
  category: string;
  price_min: number | null;
  price_max: number | null;
  title: string;
};

type FiltersContextType = {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const saved = localStorage.getItem("filters");
  const initialFilters: FiltersState = saved
    ? JSON.parse(saved)
    : {
        category: "",
        price_min: 0,
        price_max: 0,
        title: "",
      };

  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error("useFilters must be used inside FiltersProvider");
  return ctx;
}
