import { ProductDetailsView } from "src/sections/product/view";

export const metadata = {
  title: "Product: Details",
};

export default function ProductDetails({ params }) {
  const { id } = params;

  return <ProductDetailsView id={id} />;
}
