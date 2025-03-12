import { aboutQuery } from "@/queries/pages/aboutPage.query";

import { Hero } from "@/components/organisms/hero";
import { Content } from "@/components/molecules/content";
import { fetchData } from "@/utils/fetchData";
import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";
import RichText from "@/components/atoms/text/rich-text.component";
import { Button } from "@/components/atoms/button";

async function getData() {
  return fetchData(aboutQuery());
}

export default async function About() {
  const { hero, contact, intro, introExtra } = await getData();
  const { title, description, buttons = [] } = contact[0];

  const reversed = false;
  return (
    <main>
      <Hero {...hero[0]} />
      <Content {...intro[0]}>
        <div
          className={clsx(
            "order-1 z-10 mb-8",
            reversed
              ? "md:col-span-4 md:col-start-2 md:order-1"
              : "md:col-span-4 md:col-start-8 md:order-2",
          )}
        >
          <div
            className={clsx(
              "bg-white border border-gray-500 p-10",
              "rounded-md md:-mt-[50%]",
            )}
          >
            {title && (
              <Text
                as="h2"
                level="xl"
                classnames={clsx("mb-6 text-primary-500 font-medium")}
              >
                {title}
              </Text>
            )}
            {description && (
              <RichText
                text={description}
                as="p"
                level="md"
                classnames={clsx("mb-6")}
              />
            )}

            {buttons.length ? (
              <div className="space-x-3 mt-4">
                {buttons.map((button) => (
                  <Button
                    key={button.id}
                    {...button}
                    variant="solid"
                    className="w-full"
                  >
                    {button.cta}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Content>

      <section className="bg-[#EDEDEE] py-10 md:py-28">
        <Content {...introExtra[0]} />
      </section>
    </main>
  );
}
