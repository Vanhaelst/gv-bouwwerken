import clsx from "clsx";

import { fetchData } from "@/utils/fetchData";
import { contactQuery } from "@/queries/pages/contactPage.query";

import { Hero } from "@/components/organisms/hero";
import { Text } from "@/components/atoms/text/text.component";
import { Container } from "@/components/atoms/container";
import { ContactForm } from "@/components/organisms/form/contact";

async function getData() {
  return fetchData(contactQuery());
}

export default async function Contact() {
  const { hero, globals } = await getData();

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
              Bouwwerken GV
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
      </section>
    </main>
  );
}
