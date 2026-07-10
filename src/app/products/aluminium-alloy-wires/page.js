import ProductPageTemplate from "@/components/shared/ProductPageTemplate";
import { productPages } from "@/data/productPages";

const data = productPages["aluminium-alloy-wires"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function AluminiumAlloyWiresPage() {
  return <ProductPageTemplate data={data} />;
}
