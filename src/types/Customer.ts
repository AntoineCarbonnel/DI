import { Purchase } from './Purchase';
export interface Customer {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  postal_code: string;
  city: string;
  email: string;
  purchases?: Purchase[];
}