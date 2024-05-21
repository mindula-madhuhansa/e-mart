import { type SchemaTypeDefinition } from "sanity";

import { Product } from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
};
