import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const baseAPI = "https://api.escuelajs.co/api/v1";

export const useQueryGetRequest = <T>({
  queryKey,
  path,
  id = "",
  title,
  price_min = 1,
  price_max,
  category,
}: {
  queryKey: string[];
  path: string;
  id?: string;
  title?: string;
  price_min?: number;
  price_max?: number;
  category?: string;
}): UseQueryResult<T, Error> => {
  return useQuery<T, Error>({
    queryKey: [queryKey, { id, title, price_min, price_max, category }],
    queryFn: async (): Promise<T> => {
      const params = new URLSearchParams();
      if (title) params.append("title", title);

      if (price_max) {
        params.append("price_min", price_min.toString());
        params.append("price_max", price_max.toString());
      }
      if (category) params.append("categorySlug", category.toLocaleLowerCase());

      const url = id
        ? `${baseAPI}/${path}/${id}`
        : `${baseAPI}/${path}?${params.toString()}`;

      const res: AxiosResponse<T> = await axios.get(url);
      return res.data;
    },
  });
};
