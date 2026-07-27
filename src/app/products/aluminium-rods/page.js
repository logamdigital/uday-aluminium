import ProductPageTemplate from "@/components/shared/ProductPageTemplate";
import { productPages } from "@/data/productPages";

const data = productPages["aluminium-rods"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function AluminiumRodsPage() {
  return <ProductPageTemplate data={data} />;
}
