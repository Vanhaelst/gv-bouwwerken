import clsx from "clsx";
import Link from "next/link";

import Image from "@/utils/Image";
import { fetchData } from "@/utils/fetchData";
import { realisationQuery } from "@/queries/pages/realisationPage.query";

import { Hero } from "@/components/organisms/hero";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text/text.component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { RealisationLightbox } from "@/components/molecules/realisaties/lightbox";
import RichText from "@/components/atoms/text/rich-text.component";

async function getData({ slug }) {
  return fetchData(realisationQuery({ slug }));
}

export default async function Realisation({ params }) {
  const { slug } = await params;
  const { hero, content, lightbox, pagination } = await getData({ slug });

  const pages = [
    { name: "Diensten", href: "/onze-diensten", current: false },
    { name: content[0].title, href: "#", current: true },
  ];
  const prev = pagination[0].prev;
  const next = pagination[0].next;
  return (
    <main>
      <Hero {...hero[0]} breadcrumbs={pages} />

      <Container className="grid md:grid-cols-12">
        <div className="py-10 md:col-span-10 md:col-start-2 flex justify-center">
          <Image
            src={content[0].image[0].url}
            width={content[0].image[0].width}
            height={content[0].image[0].height}
            alt={content[0].image[0].alt || content[0].title}
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
              {content[0].title}
            </Text>
            <RichText
              text={content[0].description}
              level="md"
              as="p"
              classnames={clsx("mb-6")}
            />
          </div>
        </div>
      </Container>

      <RealisationLightbox lightbox={lightbox} />

      <Container className="grid md:grid-cols-2 gap-4 mb-10">
        {prev ? (
          <Link href={prev.slug} className={next ? "" : "col-span-2"}>
            <div
              className={clsx(
                next ? "aspect-video" : "aspect-[32/9]",
                "group cursor-pointer relative before:transition-all duration-300",
                "flex items-center justify-start p-4 object-cover w-full bg-[url('/hero.png')]",
                "before:content-[''] before:absolute before:inset-0 before:block before:bg-black/50 hover:before:bg-black/40 before:z-[5]",
              )}
            >
              <Text classnames="flex z-10 text-white">
                <ChevronLeftIcon
                  aria-hidden="true"
                  className={`size-5 mr-4 ml-2 group-hover:ml-0 transition-all`}
                />
                Vorige project
              </Text>
            </div>
          </Link>
        ) : null}

        {next ? (
          <Link href={next.slug} className={prev ? "" : "col-span-2"}>
            <div
              className={clsx(
                prev ? "aspect-video" : "aspect-[32/9]",
                "group cursor-pointer relative before:transition-all duration-300",
                "flex items-center justify-end p-4 object-cover w-full bg-[url('/hero.png')]",
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
          </Link>
        ) : null}
      </Container>
    </main>
  );
}
