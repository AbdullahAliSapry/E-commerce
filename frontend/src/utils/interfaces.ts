export interface objAuth {
  Name: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export interface IProduct {
  _id: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  thumbnail: string;
  title: string;
  stock: number;
}

export interface IOrder {
  _id: string;
  productId: string;
  quantity: number;
  paymentMethod: string;
  priceToOrder: number;
}


interface Iimage{
  url: string;
  publicId: string;
}
export interface ICategory {
  _id: string;
  name: string;
  imgCategory: {
    url: string;
    publicId: string;
  };
  description: string;
  totalAmount: number;
  [key: string]: string | number | Iimage;
}
