import FineWireContent from "./FineWireContent";
import { productPages } from "@/data/productPages";

const data = productPages["fine-wires"];

export const metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function FineWiresPage() {
  return <FineWireContent product={data} />;
}
