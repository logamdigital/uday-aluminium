import ProductPageTemplate from "@/components/shared/ProductPageTemplate";
import { productPages } from "@/data/productPages";

const data = productPages["aluminium-wire-mesh-fine-wires"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function AluminiumWireMeshFineWiresPage() {
  return <ProductPageTemplate data={data} />;
}
