import { Hero } from "@/components/organisms/hero";
import { Content } from "@/components/molecules/content";
import { fetchData } from "@/utils/fetchData";
import { servicesQuery } from "@/queries/pages/servicesPage.query";

async function getData() {
  return fetchData(servicesQuery());
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
