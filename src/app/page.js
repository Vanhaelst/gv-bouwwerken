import { fetchData } from "@/utils/fetchData";
import { homeQuery } from "@/queries/pages/homePage.query";

import { Hero } from "@/components/organisms/hero";
import { Content } from "@/components/molecules/content";
import { Realisation } from "@/components/molecules/realisaties";
import { metadata } from "@/app/layout";
import { seoQuery } from "@/queries/channels/seo.query";

async function getData() {
  return fetchData(homeQuery());
}

export async function generateMetadata() {
  const { seo } = await fetchData(
    seoQuery({ page: "homeEntry", entry: "home_Entry" }),
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

export default async function Home() {
  const { hero, intro, realisation, realisations } = await getData();

  return (
    <main>
      <Hero {...hero[0]} />
      <Content reversed {...intro[0]} />
      <Realisation
        {...realisation[0]}
        realisations={realisations.sort(
          (firstItem, secondItem) => firstItem.sold - secondItem.sold,
        )}
      />
    </main>
  );
}
