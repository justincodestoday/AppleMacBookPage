interface Product {
  id: number;
  name: string;
  colorOptions: Array<string>;
  chip: string;
  size: string;
  specs: Array<string>;
  description: Array<string>;
  price: number;
}

interface ProductDetails {
  size: string;
  color: string;
  chip: string;
  cpu: string;
  gpu: string;
  memory: string;
  storage: string;
}

interface ChipFilters {
  "14-inch": string;
  "16-inch": string;
}
