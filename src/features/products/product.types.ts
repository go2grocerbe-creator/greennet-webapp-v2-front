export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  image?: ProductImage;
  specifications: ProductSpecification[];
  featured: boolean;
};
