export interface IProduct {
  category: ICategory;
  creationAt: Date;
  description: string;
  id: string;
  images: string[];
  price: number;
  slug: string;
  title: string;
  updatedAt: string;
}

interface ICategory {
  id: number;
  image: string;
  name: string;
  slug: string;
}
