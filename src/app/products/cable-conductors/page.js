import ProductPageTemplate from "@/components/shared/ProductPageTemplate";
import { productPages } from "@/data/productPages";

const data = productPages["cable-conductors"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function CableConductorsPage() {
  return <ProductPageTemplate data={data} />;
}
