export type MenuCategory = 'all' | 'signature' | 'espresso' | 'non-coffee' | 'food';

export interface MenuItem {
  id: string;
  name: string;
  category: 'signature' | 'espresso' | 'non-coffee' | 'food';
  price: number;
  description: string;
  tag?: string;
  isStudentFavorite?: boolean;
  image?: string;
  temperature?: 'Hot' | 'Iced' | 'Both';
}

export interface TestimonialItem {
  id: string;
  name: string;
  campusOrSchool: string;
  major: string;
  quote: string;
  rating: number;
  favoriteItem: string;
  date: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}
