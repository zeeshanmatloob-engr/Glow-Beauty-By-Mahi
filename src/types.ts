export type Category = 'Skin Care' | 'Hair Care' | 'Fashion' | 'Jewellery' | 'All';

export type CurrencyCode = 'USD' | 'INR' | 'GBP' | 'PKR';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  rate: number;
}

export const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'INR', symbol: '₹', rate: 83.5 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'PKR', symbol: 'Rs', rate: 278.5 }
];

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  isBestseller?: boolean;
}

export const CATEGORIES: Category[] = ['All', 'Skin Care', 'Hair Care', 'Fashion', 'Jewellery'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vitamin C Glow Serum',
    category: 'Skin Care',
    price: 15.99,
    originalPrice: 25.00,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    description: 'A lightweight serum infused with pure Vitamin C for an instant radiant glow and dark spot reduction.',
    isBestseller: true
  },
  {
    id: '2',
    name: 'Argan Hair Repair Mask',
    category: 'Hair Care',
    price: 12.50,
    originalPrice: 18.00,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800',
    description: 'Deep conditioning treatment with Moroccan Argan oil for silky smooth and healthy hair.',
    isBestseller: true
  },
  {
    id: '3',
    name: 'Antique Gold Necklace Set',
    category: 'Jewellery',
    price: 45.00,
    originalPrice: 80.00,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    description: 'Traditional gold plated necklace set with matching earrings. Perfect for special occasions.',
    isBestseller: true
  },
  {
    id: '4',
    name: 'Silk Floral Summer Dress',
    category: 'Fashion',
    price: 24.99,
    originalPrice: 45.00,
    image: 'https://images.unsplash.com/photo-1572804013307-59c85b4ec665?auto=format&fit=crop&q=80&w=800',
    description: 'Graceful floral dress made from premium silk blend. Lightweight and breezy for summer.',
    isBestseller: true
  },
  {
    id: '5',
    name: 'Midnight Repair Cream',
    category: 'Skin Care',
    price: 18.99,
    originalPrice: 30.00,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=800',
    description: 'Intensive night recovery cream that works while you sleep to repair and hydrate.',
  },
  {
    id: '6',
    name: 'Pearl Hoops Earrings',
    category: 'Jewellery',
    price: 8.99,
    originalPrice: 15.00,
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4faad367?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant pearl hoop earrings, handcrafted for a timeless look.',
  },
  {
    id: '7',
    name: 'Detoxifying Clay Mask',
    category: 'Skin Care',
    price: 9.99,
    originalPrice: 15.00,
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&q=80&w=800',
    description: 'Mineral-rich clay mask that deep cleans pores and removes impurities.',
  },
  {
    id: '8',
    name: 'Herbal Scalp Vitalizer',
    category: 'Hair Care',
    price: 14.00,
    originalPrice: 22.00,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    description: 'Ayurvedic blend of herbs to promote hair growth and scalp health.',
  },
  {
    id: '9',
    name: 'Embroidered Kaftan',
    category: 'Fashion',
    price: 35.50,
    originalPrice: 60.00,
    image: 'https://images.unsplash.com/photo-1627484394034-08ca0aef1f6c?auto=format&fit=crop&q=80&w=800',
    description: 'Beautifully embroidered kaftan with intricate detailing. One size fits all confortably.',
  }
];
