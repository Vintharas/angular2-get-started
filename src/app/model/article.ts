import { Review } from './review';

export interface Article {
  id: number,
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  reviews: Review[];
}
