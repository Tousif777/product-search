export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number | null;
  imageUrl: string | null;
  createdAt: Date;
} 