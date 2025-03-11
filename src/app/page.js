import { Hero } from "@/components/organisms/hero";
import { Container } from "@/components/atoms/container";
import { Content } from "@/components/molecules/content";
import { Realisation } from "@/components/molecules/realisaties";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero
          title="Sterk gebouwd, voor de toekomst"
          align="right"
          size="big"
          bold
        />
      </Container>

      <Content
        reversed
        title="Over Bouwwerken GV"
        description="Glenn Verhasselt is de trotse zaakvoerder van Bouwwerken GV. Na verschillende jaren ervaring op te doen in de sector vond hij het tijd om de stap te zetten om zelfstandige te worden. In zijn bouwwerken kan hij al zijn energie en passie kwijt. De focus ligt op metsel- en betonwerken en op volledige bouwprojecten zoals nieuwbouw en renovatie. Ook voor grond en rioleringswerken ben je bij Bouwwerken GV aan het juiste adres. Met zijn uitgebreid netwerk aan ondernemers in de bouwsector en zijn eigen machinepark gaat hij geen uitdaging uit de weg. "
        buttons={[
          {
            id: 123,
            cta: "call to action",
            variant: "outline",
            color: "primary",
          },
        ]}
      />

      <Realisation />
    </main>
  );
}
