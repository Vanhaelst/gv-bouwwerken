import { Hero } from "@/components/organisms/hero";
import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { RealisationsOverview } from "@/components/molecules/realisaties/overview";

const buttons = [
  {
    id: 1,
    cta: "Metselwerken",
  },
  {
    id: 2,
    cta: "Betonwerken",
  },
  {
    id: 3,
    cta: "Nieuwbouw",
  },
  {
    id: 4,
    cta: "Renovatie",
  },
];

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
      <Hero title="Realisaties" />

      <Container className="grid md:grid-cols-12">
        <div className="py-10 md:col-span-10 md:col-start-2 flex justify-center">
          {buttons.length ? (
            <div className="space-x-3 mt-4">
              {buttons.map((button) => (
                <Button key={button.id} color="primary" variant="outline">
                  {button.cta}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>

      <RealisationsOverview realisations={realisations} />
    </main>
  );
}
