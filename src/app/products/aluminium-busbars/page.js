import ProductPageTemplate from "@/components/shared/ProductPageTemplate";
import { productPages } from "@/data/productPages";

const data = productPages["aluminium-busbars"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function AluminiumBusbarsPage() {
  return <ProductPageTemplate data={data} />;
}
