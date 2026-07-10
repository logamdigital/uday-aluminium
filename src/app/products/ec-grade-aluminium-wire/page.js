import ProductPageTemplate from "@/components/shared/ProductPageTemplate";
import { productPages } from "@/data/productPages";

const data = productPages["ec-grade-aluminium-wire"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function EcGradeAluminiumWirePage() {
  return <ProductPageTemplate data={data} />;
}
