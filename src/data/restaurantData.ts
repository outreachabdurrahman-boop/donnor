/**
 * Confirmed Business Information for Donnor Pizza
 * Stored strictly according to verified details.
 */

// Image assets (using direct imports with verified files)
import heroPizzaImg from '../assets/images/donnor_hero_pizza_1788612882565.jpg';
import cheesePullImg from '../assets/images/cheese_pull_slice_1788612897393.jpg';
import signatureStoryImg from '../assets/images/signature_pizza_story_1788612915735.jpg';
import foodSpreadImg from '../assets/images/food_showcase_spread_1788612932525.jpg';

export const RESTAURANT = {
  name: 'Donnor Pizza',
  tagline: 'HOT. FRESH. LOADED.',
  subtitle: 'CHEESY. HOT. IRRESISTIBLE.',
  supportingText: 'Fresh pizza made for serious cravings.',
  locationBadge: 'G-13, Islamabad',
  address: {
    street: 'Walayat Market, Opposite to PCC',
    sector: 'G-13',
    city: 'Islamabad',
    country: 'Pakistan',
    full: 'Walayat Market, Opposite to PCC, G-13, Islamabad, Pakistan',
  },
  phone: '0311 1135356',
  phoneHref: 'tel:+923111135356',
  whatsappHref: 'https://wa.me/923111135356',
  googleMapsQuery: 'Donnor Pizza, Walayat Market, G-13, Islamabad',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Donnor+Pizza%2C+Walayat+Market%2C+G-13%2C+Islamabad',
  images: {
    hero: heroPizzaImg,
    cheesePull: cheesePullImg,
    signature: signatureStoryImg,
    showcase: foodSpreadImg,
  },
} as const;

export const PIZZA_EXPERIENCE_STEPS = [
  {
    step: '01',
    title: 'FRESH',
    description: 'Freshly prepared for the perfect bite.',
    accent: 'Hand-stretched dough & fresh herbs',
  },
  {
    step: '02',
    title: 'HOT',
    description: 'Baked hot for that irresistible cheese-and-crust experience.',
    accent: 'High-heat stone oven finish',
  },
  {
    step: '03',
    title: 'LOADED',
    description: 'Made to satisfy serious pizza cravings.',
    accent: 'Generous mozzarella pull',
  },
] as const;

export const FOOD_CATEGORIES = [
  {
    id: 'pizza',
    name: 'PIZZA',
    tagline: 'Signature Oven-Baked Pies',
    description: 'Golden melted cheese, blistered savory crust, and satisfying toppings baked piping hot.',
    iconName: 'Pizza',
    badge: 'Core Favorite',
  },
  {
    id: 'cheesy-bites',
    name: 'CHEESY BITES',
    tagline: 'Melty & Irresistible',
    description: 'Warm, golden, and packed with molten cheese for the ultimate sharing starter.',
    iconName: 'Sparkles',
    badge: 'Melted Goodness',
  },
  {
    id: 'sides',
    name: 'SIDES',
    tagline: 'Crispy Accompaniments',
    description: 'Flavored savory sides and garlic-infused breads designed to complement every hot slice.',
    iconName: 'Flame',
    badge: 'Crunch & Dip',
  },
  {
    id: 'combos',
    name: 'COMBOS',
    tagline: 'Satisfying Feasts',
    description: 'Generously loaded meal combinations crafted for group cravings, friends, and family.',
    iconName: 'Users',
    badge: 'Crowd Pleaser',
  },
] as const;
