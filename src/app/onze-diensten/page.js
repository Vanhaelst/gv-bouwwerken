import { Hero } from "@/components/organisms/hero";
import { Content } from "@/components/molecules/content";
import { fetchData } from "@/utils/fetchData";
import { servicesQuery } from "@/queries/pages/servicesPage.query";
import { seoQuery } from "@/queries/channels/seo.query";
import { metadata } from "@/app/layout";

async function getData() {
  return fetchData(servicesQuery());
}

export async function generateMetadata() {
  const { seo } = await fetchData(
    seoQuery({ page: "servicesPageEntry", entry: "fixedPage_Entry" }),
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

export default async function Services() {
  const { hero, services } = await getData();

  return (
    <main>
      <Hero {...hero[0]} />
      {services.map((service, index) => {
        return (
          <Content key={service.id} reversed={index % 2 === 0} {...service} />
        );
      })}
    </main>
  );
}
