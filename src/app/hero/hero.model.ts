export interface Amenity {
  icon: string;
  label: string;
}

export const HERO_TABS = ['Co Living', 'Hotels', 'Service Apartments'] as const;
export type HeroTab = (typeof HERO_TABS)[number];

export const HERO_CITIES = ['Hyderabad', 'Madhapur'];

export const HERO_AMENITIES: Amenity[] = [
  { icon: '📶', label: 'Wi‑Fi' },
  { icon: '❄️', label: 'Air conditioning' },
  { icon: '🍳', label: 'Breakfast' },
  { icon: '🧺', label: 'Laundry' },
  { icon: '🛎', label: 'Room service' },
  { icon: '🚗', label: 'Parking' },
];

export const HERO_PRICE_PER_DAY = '₹2500/day';
export const HERO_RATING = 4.9;
export const HERO_RATING_CAPTION = 'from 2K+ reviews';
export const HERO_AVATAR_COUNT = 4;
