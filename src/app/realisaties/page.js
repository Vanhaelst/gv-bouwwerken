import { fetchData } from "@/utils/fetchData";
import { realisationsQuery } from "@/queries/pages/realisationsPage.query";

import { Hero } from "@/components/organisms/hero";
import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { RealisationsOverview } from "@/components/molecules/realisaties/overview";

const buttons = [
  {
    id: 1,
    cta: "Metselwerken",
  },
  {
    id: 2,
    cta: "Betonwerken",
  },
  {
    id: 3,
    cta: "Nieuwbouw",
  },
  {
    id: 4,
    cta: "Renovatie",
  },
];

async function getData() {
  return fetchData(realisationsQuery());
}

export default async function Realisations() {
  const { hero, realisations } = await getData();

  return (
    <main>
      <Hero {...hero[0]} />

      {/*
      <Container className="grid md:grid-cols-12">
        <div className="pt-10 md:col-span-10 md:col-start-2 flex justify-center">
          {buttons.length ? (
            <div className="space-x-3 mt-4">
              {buttons.map((button) => (
                <Button key={button.id} color="primary" variant="outline">
                  {button.cta}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
      */}

      <RealisationsOverview realisations={realisations} />
    </main>
  );
}
