import clsx from "clsx";

import { fetchData } from "@/utils/fetchData";
import { contactQuery } from "@/queries/pages/contactPage.query";

import { Hero } from "@/components/organisms/hero";
import { Text } from "@/components/atoms/text/text.component";
import { Container } from "@/components/atoms/container";
import { ContactForm } from "@/components/organisms/form/contact";
import Image from "@/utils/Image";
import { seoQuery } from "@/queries/channels/seo.query";
import { metadata } from "@/app/layout";

async function getData() {
  return fetchData(contactQuery());
}

export async function generateMetadata() {
  const { seo } = await fetchData(
    seoQuery({ page: "contactEntry", entry: "contact_Entry" }),
  );
  const { seoTitle, seoDescription, seoKeywords, seoImage } = seo.seo ?? {};

  return {
    title: seoTitle || metadata.title,
    description: seoDescription || metadata.description,
    keywords: seoKeywords || metadata.keywords,
    images: seoImage?.[0]?.url || metadata.image,

    openGraph: {
      title: seoTitle || metadata.title,
      description: seoDescription || metadata.description,
      url: `https://www.prikentikmechelen.be/`,
      images: seoImage?.[0]?.url || "",
    },
  };
}

export default async function Contact() {
  const { hero, content, globals } = await getData();

  return (
    <main>
      <Hero {...hero[0]} />

      <section>
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
              {content[0]?.contentHeading}
            </Text>
            <Text
              as="h2"
              level="sm"
              classnames={clsx("text-black font-medium mb-4")}
            >
              {globals.address1}
              <br /> {globals.address2}
            </Text>
            <Text
              as="h2"
              level="sm"
              classnames={clsx("text-black font-medium")}
            >
              <a
                href={`mailto:${globals.mail}`}
                className="hover:text-primary-500"
              >
                {globals.mail}
              </a>
            </Text>
            <Text
              as="h2"
              level="sm"
              classnames={clsx("text-black font-medium")}
            >
              <a
                href={`tel:${globals.phone}`}
                className="hover:text-primary-500"
              >
                {globals.phone}
              </a>
            </Text>
          </div>
          <ContactForm />
        </Container>

        <Container className=" mb-10 md:mb-24">
          <Image
            src={content[0].image[0].url}
            width={content[0].image[0].width}
            height={content[0].image[0].height}
            alt="Bouwwerken GV"
            classnames="object-cover aspect-video w-full"
          />
        </Container>
      </section>
    </main>
  );
}
