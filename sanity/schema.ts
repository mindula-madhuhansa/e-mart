import { type SchemaTypeDefinition } from "sanity";

import { Product } from "@/sanity/schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
};
