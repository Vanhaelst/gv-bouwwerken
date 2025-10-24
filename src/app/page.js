import { fetchData } from "@/utils/fetchData";
import { homeQuery } from "@/queries/pages/homePage.query";

import { Hero } from "@/components/organisms/hero";
import { Content } from "@/components/molecules/content";
import { Realisation } from "@/components/molecules/realisaties";

async function getData() {
  return fetchData(homeQuery());
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
