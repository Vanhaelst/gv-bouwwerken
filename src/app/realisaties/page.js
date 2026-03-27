import { fetchData } from "@/utils/fetchData";
import { realisationsPageQuery } from "@/queries/pages/realisationsPage.query";

import { Hero } from "@/components/organisms/hero";
import { RealisationsClient } from "@/app/realisaties/client";
import { seoQuery } from "@/queries/channels/seo.query";
import { metadata } from "@/app/layout";

async function getData({ service }) {
  return fetchData(realisationsPageQuery({ service }));
}

export async function generateMetadata() {
  const { seo } = await fetchData(
    seoQuery({ page: "realisationsPageEntry", entry: "fixedPage_Entry" }),
  );
  const { seoTitle, seoDescription, seoKeywords, seoImage } = seo.seo ?? {};

  return {
    title: seoTitle || metadata.title,
    description: seoDescription || metadata.description,
    keywords: seoKeywords || metadata.keywords,
    images: seoImage?.[0]?.url || metadata.image,

    openGraph: {
      title: seoTitle || metadata.title,
      description: seoDescription || metadata.description,
      url: `https://www.prikentikmechelen.be/`,
      images: seoImage?.[0]?.url || "",
    },
  };
}

export default async function Realisations() {
  const { hero, realisations } = await getData({ service: "" });

  return (
    <main>
      <Hero {...hero[0]} />

      <RealisationsClient defaultRealisations={realisations} />
    </main>
  );
}
