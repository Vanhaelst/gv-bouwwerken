"use client";

import { fetchData } from "@/utils/fetchData";

import { RealisationsOverview } from "@/components/molecules/realisaties/overview";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { SERVICES } from "@/enums/services";
import { realisationsQuery } from "@/queries/channels/realisations.query";

const buttons = [
  {
    id: 0,
    cta: "Alle",
    value: "",
  },
  {
    id: 1,
    cta: "Metselwerken",
    value: SERVICES.metselwerken,
  },
  {
    id: 2,
    cta: "Betonwerken",
    value: SERVICES.betonwerken,
  },
  {
    id: 3,
    cta: "Nieuwbouw",
    value: SERVICES.nieuwbouw,
  },
  {
    id: 4,
    cta: "Renovatie",
    value: SERVICES.renovatie,
  },
];

async function getData({ service }) {
  return fetchData(realisationsQuery({ service }));
}

export const RealisationsClient = ({ defaultRealisations }) => {
  const [realisations, setRealisations] = useState(defaultRealisations);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter !== "") {
      getData({ service: filter }).then((data) => {
        setRealisations(data?.realisations);
      });
    } else {
      setRealisations(defaultRealisations);
    }
  }, [filter]);
  return (
    <>
      <Container className="grid md:grid-cols-12">
        <div className="pt-10 md:col-span-10 md:col-start-2 flex justify-center">
          {buttons.length ? (
            <div className="space-x-3 mt-4">
              {buttons.map((button) => (
                <Button
                  key={button.id}
                  color="primary"
                  variant={filter === button.value ? "solid" : "outline"}
                  onClick={() => setFilter(button.value)}
                >
                  {button.cta}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>

      {realisations?.length > 0 ? (
        <RealisationsOverview realisations={realisations} />
      ) : (
        <div className="text-center  py-24">
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            Geen projecten gevonden met {filter}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Neem contact met ons op voor vragen of een gratis offerte.
          </p>
        </div>
      )}
    </>
  );
};
