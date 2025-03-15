import clsx from "clsx";
import Image from "@/utils/Image";
import { Hero } from "@/components/organisms/hero";
import { Container } from "@/components/atoms/container";
import { RealisationsOverview } from "@/components/molecules/realisaties/overview";
import { Text } from "@/components/atoms/text/text.component";
import { fetchData } from "@/utils/fetchData";
import { serviceQuery } from "@/queries/pages/servicePage.query";
import RichText from "@/components/atoms/text/rich-text.component";
import { Button } from "@/components/atoms/button";

import { SERVICES } from "@/enums/services";

async function getData({ slug, service }) {
  return fetchData(serviceQuery({ slug, service }));
}

export default async function Service({ params }) {
  const { slug } = await params;
  const { services, realisations } = await getData({
    slug,
    service: SERVICES.metselwerken,
  });

  const service = services?.[0] ?? {};
  const pages = [
    { name: "Diensten", href: "/onze-diensten", current: false },
    { name: service.title, href: "#", current: true },
  ];

  return (
    <main>
      <Hero title={service.title} size="xsmall" breadcrumbs={pages} />

      <Container className="grid md:grid-cols-12">
        <div className="py-10 md:col-span-10 md:col-start-2 flex justify-center">
          <Image
            src={service.image[0].url}
            width={service.image[0].width}
            height={service.image[0].height}
            alt={service.image[0].alt || service.title}
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
              {service.subtitle}
            </Text>
            <RichText
              text={service.description}
              as="p"
              level="md"
              classnames={clsx("mb-6")}
            />
          </div>
        </div>
      </Container>
      <RealisationsOverview realisations={realisations} />

      <Container className="flex justify-center mb-20">
        <Button href="/realisaties">Bekijk alle realisaties</Button>
      </Container>
    </main>
  );
}
