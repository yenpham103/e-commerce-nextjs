//all types here
export type Category = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  image: string;
  createdAt?: string;
  submenu?: SubCategory[];
};
export type SubCategory = {
  name: string;
  link: string;
  slug: string;
  parent: string;
};
export type Page = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  createdAt?: string;
  subpage?: SubPage[];
};
export type SubPage = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  parent?: string;
  createdAt?: string;
};
export type Product = {
  _id: string;
  name: string;
  feature: boolean;
  slug: string;
  description: string;
  category: string;
  subCategories: string;
  brand: Brand;
  content: string;
  details: Detail[];
  questions: Question[];
  reviews: Review[];
  subProducts: SubProduct[];
};
export type Brand = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};
export type Detail = {
  _id: string;
  name: string;
  value: string;
};
export type Question = {
  _id: string;
  name: string;
  value: string;
};
export type Review = {
  _id: string;
  name: string;
  rating: number;
  comment: string;
};
export type Style = {
  images: string[];
  name: string;
  color: string;
};
export type Options = {
  images: string[];
  option: string;
  qty: number;
  price: number;
  discount: number;
  _id: string;
  sold: number;
};
export type SubProduct = {
  _id: string;
  sku: string;
  options: Options[];
  style: Style;
};
export type CartItem = {};
