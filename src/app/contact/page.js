import clsx from "clsx";

import { Hero } from "@/components/organisms/hero";
import { Text } from "@/components/atoms/text/text.component";
import { Container } from "@/components/atoms/container";
import { ContactForm } from "@/components/organisms/form/contact";

export default function Home() {
  return (
    <main>
      <Hero
        size="medium"
        title="Contact"
        description="Wil je bouwen of verbouwen en wil je beroep doen op één van onze diensten? Neem dan snel contact met ons op voor vragen of een gratis offerte."
      />

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
              Tiendenschuurstraat 27a
              <br /> 2811 Leest
            </Text>
            <Text
              as="h2"
              level="sm"
              classnames={clsx("text-black font-medium")}
            >
              <a
                href={"mailto:glenn@bouwwerkengv.be"}
                className="hover:text-primary-500"
              >
                glenn@bouwwerkengv.be
              </a>
            </Text>
            <Text
              as="h2"
              level="sm"
              classnames={clsx("text-black font-medium")}
            >
              <a
                href={"mailto:0488/58.78.66"}
                className="hover:text-primary-500"
              >
                0488/58.78.66
              </a>
            </Text>
          </div>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
