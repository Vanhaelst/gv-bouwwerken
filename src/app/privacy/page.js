import { fetchData } from "@/utils/fetchData";

import { Hero } from "@/components/organisms/hero";
import clsx from "clsx";
import RichText from "@/components/atoms/text/rich-text.component";
import { privacyQuery } from "@/queries/pages/privacyPage.query";
import { Container } from "@/components/atoms/container";

async function getData() {
  return fetchData(privacyQuery());
}

export default async function Privacy() {
  const { hero, policy } = await getData();

  return (
    <main>
      <Hero {...hero[0]} />

      <Container className="grid md:grid-cols-12 my-10 md:my-24">
        <div
          className={clsx(
            "order-2",
            "flex flex-col justify-center",
            "md:col-span-10 md:col-start-2 md:order-1",
          )}
        >
          <RichText
            text={policy[0].description}
            as="p"
            level="md"
            classnames={clsx("mb-6")}
          />
        </div>
      </Container>
    </main>
  );
}
