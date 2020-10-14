import { Review } from './review';

export interface ReviewPage {
  id?: number;
  page?: number;
  results?: Review[];
  total_pages?: number;
  total_results?: number;
}
