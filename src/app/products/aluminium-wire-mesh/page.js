import ProductPageTemplate from "@/components/shared/ProductPageTemplate";
import { productPages } from "@/data/productPages";

const data = productPages["aluminium-wire-mesh"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function AluminiumWireMeshPage() {
  return <ProductPageTemplate data={data} />;
}
