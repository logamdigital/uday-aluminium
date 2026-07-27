import AnchorWireContent from "./AnchorWireContent";
import { anchorWireMeta } from "@/data/anchorWireSpecs";

export const metadata = {
  title: anchorWireMeta.title,
  description: anchorWireMeta.metaDescription,
};

export default function AnchorWirePage() {
  return <AnchorWireContent product={anchorWireMeta} />;
}
