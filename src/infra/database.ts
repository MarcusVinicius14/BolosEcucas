import { ProductType } from "@/types/productType";

type GetData = () => Promise<ProductType>;

export const getData: GetData = async () => {
  const Res = await fetch("https://fakestoreapi.com/products");

  if (!Res.ok) {
    throw new Error("failed to conect to API");
  }
  return Res.json();
};
