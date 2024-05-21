type ProductImage = {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

type Product = {
  _id: string;
  _updatedAt: string;
  price: number;
  _createdAt: string;
  _rev: string;
  _type: string;
  name: string;
  images: ProductImage[];
  description: string;
  slug: {
    current: string;
    _type: string;
  };
};
