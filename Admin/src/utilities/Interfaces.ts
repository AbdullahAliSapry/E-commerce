export interface ICategory {
  name: string;
  image: File |null;
  description: string;
  totalAmount: number;
}
export interface objAuth {
  Name: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export interface IProduct {
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  stock: number;
  rating: number;
  brand: string;
  images: string[];
  discountPercentage?: number;
}
