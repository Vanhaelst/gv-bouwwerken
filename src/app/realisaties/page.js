import { fetchData } from "@/utils/fetchData";
import { realisationsPageQuery } from "@/queries/pages/realisationsPage.query";

import { Hero } from "@/components/organisms/hero";
import { RealisationsClient } from "@/app/realisaties/client";

async function getData({ service }) {
  return fetchData(realisationsPageQuery({ service }));
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
