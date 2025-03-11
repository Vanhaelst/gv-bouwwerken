import { Hero } from "@/components/organisms/hero";
import { Content } from "@/components/molecules/content";

export default function Home() {
  return (
    <main>
      <Hero title="Onze diensten" />

      <Content
        reversed
        title="Metselwerken"
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

      <Content
        title="Betonwerken"
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
      <Content
        reversed
        title="Nieuwbouw"
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

      <Content
        title="Renovatie"
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
    </main>
  );
}
