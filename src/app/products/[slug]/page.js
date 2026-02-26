import { productSeries } from "@/data/productSeries";
import { notFound } from "next/navigation";
import SeriesDetailContent from "./SeriesDetailContent";

export function generateStaticParams() {
  return productSeries.map((series) => ({
    slug: series.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const series = productSeries.find((s) => s.id === slug);
  if (!series) return {};

  return {
    title: `${series.name} — ${series.subtitle} | Uday Aluminium`,
    description: `${series.mainProperty}. Common alloys: ${series.examples.join(", ")}. Applications: ${series.applications.slice(0, 3).join(", ")} and more.`,
  };
}

export default async function SeriesDetailPage({ params }) {
  const { slug } = await params;
  const series = productSeries.find((s) => s.id === slug);
  if (!series) notFound();

  const currentIndex = productSeries.findIndex((s) => s.id === slug);
  const prevSeries = currentIndex > 0 ? productSeries[currentIndex - 1] : null;
  const nextSeries =
    currentIndex < productSeries.length - 1
      ? productSeries[currentIndex + 1]
      : null;

  return (
    <SeriesDetailContent
      series={series}
      prevSeries={prevSeries}
      nextSeries={nextSeries}
    />
  );
}
