import clsx from "clsx";
import Image from "@/utils/Image";
import { Hero } from "@/components/organisms/hero";
import { Container } from "@/components/atoms/container";
import { RealisationsOverview } from "@/components/molecules/realisaties/overview";
import { Text } from "@/components/atoms/text/text.component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const realisations = [
  {
    src: "/test.png",
    alt: "/test.png",
    width: 500,
    height: 500,
  },
  {
    src: "/test.png",
    alt: "/test.png",
    width: 500,
    height: 500,
  },
  {
    src: "/test.png",
    alt: "/test.png",
    width: 500,
    height: 500,
  },
  {
    src: "/test.png",
    alt: "/test.png",
    width: 500,
    height: 500,
  },
  {
    src: "/test.png",
    alt: "/test.png",
    width: 500,
    height: 500,
  },
  {
    src: "/test.png",
    alt: "/test.png",
    width: 500,
    height: 500,
  },
];

export default function Home() {
  return (
    <main>
      <Hero title="Nieuwbouw" />

      <Container className="grid md:grid-cols-12">
        <div className="py-10 md:col-span-10 md:col-start-2 flex justify-center">
          <Image
            {...realisations[0]}
            classnames="object-cover aspect-video w-full"
          />
        </div>

        <div className="bg-white py-10 md:col-span-6 md:col-start-6 flex justify-center md:-mt-[40%]">
          <div className="p-8">
            <Text
              as="h3"
              level="xl"
              classnames={clsx("mb-6 text-primary-500 font-medium")}
            >
              Specialist in de bouwsector
            </Text>
            <Text as="p" level="md" classnames={clsx("mb-6")}>
              Glenn Verhasselt is de trotse zaakvoerder van Bouwwerken GV. Na
              verschillende jaren ervaring op te doen in de sector vond hij het
              tijd om de stap te zetten om zelfstandige te worden. In zijn
              bouwwerken kan hij al zijn energie en passie kwijt. De focus ligt
              op metsel- en betonwerken en op volledige bouwprojecten zoals
              nieuwbouw en renovatie. Ook voor grond en rioleringswerken ben je
              bij Bouwwerken GV aan het juiste adres. Met zijn uitgebreid
              netwerk aan ondernemers in de bouwsector en zijn eigen machinepark
              gaat hij geen uitdaging uit de weg.
            </Text>
          </div>
        </div>
      </Container>

      <RealisationsOverview realisations={realisations} />

      <Container className="grid md:grid-cols-2 gap-4 mb-10">
        <div
          className={clsx(
            "group cursor-pointer relative before:transition-all duration-300",
            "flex items-center justify-start p-4 object-cover w-full aspect-video bg-[url('/hero.png')]",
            "before:content-[''] before:absolute before:inset-0 before:block before:bg-black/50 hover:before:bg-black/40 before:z-[5]",
          )}
        >
          {" "}
          <Text classnames="flex z-10 text-white">
            <ChevronLeftIcon
              aria-hidden="true"
              className={`size-5 mr-4 ml-2 group-hover:ml-0 transition-all`}
            />
            Vorige project
          </Text>
        </div>
        <div
          className={clsx(
            "group cursor-pointer relative before:transition-all duration-300",
            "flex items-center justify-end p-4 object-cover w-full aspect-video bg-[url('/hero.png')]",
            "before:content-[''] before:absolute before:inset-0 before:block before:bg-black/50 hover:before:bg-black/40 before:z-[5]",
          )}
        >
          <Text classnames="flex z-10 text-white">
            Volgende project
            <ChevronRightIcon
              aria-hidden="true"
              className={`size-5 ml-4 mr-2 group-hover:mr-0 transition-all`}
            />
          </Text>
        </div>
      </Container>
    </main>
  );
}
