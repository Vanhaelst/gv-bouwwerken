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
import { Fishe } from "@/app/realisaties/[slug]/fishe";
import { ContactForm } from "@/components/organisms/form/contact";
import { formatCurrency } from "@/utils/formatPrice";
import CallToAction from "@/components/molecules/cta";

async function getData({ slug }) {
  return fetchData(realisationQuery({ slug }));
}

export default async function Realisation({ params }) {
  const { slug } = await params;
  const { hero, content, fishe, lightbox, pagination, globals } = await getData(
    {
      slug,
    },
  );

  const pages = [
    { name: "Realisaties", href: "/realisaties", current: false },
    { name: content[0].title, href: "#", current: true },
  ];

  const prev = pagination[0].prev;
  const next = pagination[0].next;
  return (
    <main>
      <Hero {...hero[0]} breadcrumbs={pages} />

      <section id="content">
        <Container className="grid md:grid-cols-12 md:pt-16">
          <div className="md:col-span-10 md:col-start-2">
            <CallToAction
              title={`Interesse?`}
              subtitle={`Contacteer ons vandaag!`}
              buttons={[
                {
                  id: 1,
                  cta: "Bel ons",
                  href: "tel:0488 58 78 66",
                  color: "white",
                  variant: "solid",
                },
                {
                  id: 2,
                  cta: "Mail ons",
                  href: "mailto:glenn@bouwwerkengv.be",
                  color: "white",
                  variant: "outline",
                },
              ]}
            />
          </div>

          <div className="py-10 md:col-span-10 md:col-start-2 flex justify-center">
            <Image
              src={content[0].image[0].url}
              width={content[0].image[0].width}
              height={content[0].image[0].height}
              alt={content[0].image[0].alt || content[0].title}
              classnames="object-cover aspect-video w-full"
            />
          </div>

          <div className="bg-white md:col-span-6 md:col-start-6 flex justify-center md:-mt-[40%]">
            <div className="p-8 w-full">
              {content[0].price ? (
                <div className="bg-primary-500 mb-6 p-2 w-fit flex items-center justify-center">
                  <Text
                    as="h2"
                    level="xl"
                    classnames={clsx("text-white font-thin")}
                  >
                    {formatCurrency(content[0].price)}
                  </Text>
                </div>
              ) : null}

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
      </section>

      {fishe?.[0]?.fishe ? (
        <Fishe title={hero?.[0]?.title} fishe={fishe[0]} />
      ) : null}

      <Container className="grid md:grid-cols-12 my-10 md:my-24">
        <div
          className={clsx(
            "",
            "flex flex-col justify-start py-10",
            "md:col-span-3 md:col-start-2",
          )}
        >
          <Text
            as="h2"
            level="md"
            classnames={clsx("text-primary-500 font-medium mb-2")}
          >
            Meer info over dit project?
          </Text>
          <Text
            as="h2"
            level="sm"
            classnames={clsx("text-black font-medium mb-4")}
          >
            {globals.address1}
            <br /> {globals.address2}
          </Text>
          <Text as="h2" level="sm" classnames={clsx("text-black font-medium")}>
            <a
              href={`mailto:${globals.mail}`}
              className="hover:text-primary-500"
            >
              {globals.mail}
            </a>
          </Text>
          <Text as="h2" level="sm" classnames={clsx("text-black font-medium")}>
            <a href={`tel:${globals.phone}`} className="hover:text-primary-500">
              {globals.phone}
            </a>
          </Text>
        </div>
        <ContactForm />
      </Container>

      {process.env.NEXT_PUBLIC_SITE === "bouwwerkenGv" ? (
        <Container className="grid md:grid-cols-2 gap-4 mb-10" id="pagination">
          {prev ? (
            <Link href={prev.slug} className={next ? "" : "col-span-2"}>
              <div
                className={clsx(
                  next ? "aspect-video" : "aspect-[32/9]",
                  "group cursor-pointer relative before:transition-all duration-300",
                  `flex items-center justify-start p-4 bg-cover bg-center w-full`,
                  "before:content-[''] before:absolute before:inset-0 before:block before:bg-black/50 hover:before:bg-black/40 before:z-[5]",
                )}
                style={{
                  backgroundImage: `url(${prev.image[0].url || "/hero.png"})`,
                }}
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
                  `flex items-center justify-end p-4 bg-cover bg-center w-full`,
                  "before:content-[''] before:absolute before:inset-0 before:block before:bg-black/50 hover:before:bg-black/40 before:z-[5]",
                )}
                style={{
                  backgroundImage: `url(${next.image[0].url || "/hero.png"})`,
                }}
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
      ) : null}
    </main>
  );
}
