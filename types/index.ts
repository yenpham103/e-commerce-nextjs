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
export type Page = {};
