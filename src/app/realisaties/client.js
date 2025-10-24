"use client";

import { fetchData } from "@/utils/fetchData";

import { RealisationsOverview } from "@/components/molecules/realisaties/overview";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { SERVICES } from "@/enums/services";
import { realisationsQuery } from "@/queries/channels/realisations.query";

const buttonsBouwwerken = [
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
  {
    id: 5,
    cta: "Te koop",
    value: SERVICES.renovatie,
  },
  {
    id: 6,
    cta: "Verkocht",
    value: SERVICES.renovatie,
  },
];

const buttonsInvest = [
  {
    id: 0,
    cta: "Alle",
    value: "",
  },
  {
    id: 1,
    cta: "Te koop",
    value: SERVICES.teKoop,
  },
  {
    id: 2,
    cta: "Verkocht",
    value: SERVICES.verkocht,
  },
];

const buttons =
  process.env.NEXT_PUBLIC_SITE === "bouwwerkenGv"
    ? buttonsBouwwerken
    : buttonsInvest;

async function getData({ service, sold }) {
  return fetchData(
    realisationsQuery({ service: service?.value, sold: sold?.value }),
  );
}

export const RealisationsClient = ({ defaultRealisations }) => {
  const [realisations, setRealisations] = useState(defaultRealisations);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(undefined);

  const handleFilter = async (filter) => {
    await setLoading(true);
    await setFilter(filter || "");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (filter === undefined) {
      setFilter(buttons[0]);
    }
  }, [filter]);

  useEffect(() => {
    if (filter === buttons[0]) {
      setRealisations(defaultRealisations);
      // setLoading(false);
    } else {
      getData(
        process.env.NEXT_PUBLIC_SITE === "bouwwerkenGv"
          ? { service: filter }
          : { sold: filter || "" },
      ).then((data) => {
        setRealisations(data?.realisations);
        setLoading(false);
      });
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
                  variant={filter?.cta === button.cta ? "solid" : "outline"}
                  onClick={() => handleFilter(button)}
                >
                  {button.cta}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>

      {realisations?.length > 0 ? (
        <RealisationsOverview
          loading={loading}
          realisations={realisations.sort(
            (firstItem, secondItem) => firstItem.sold - secondItem.sold,
          )}
        />
      ) : (
        <div className="text-center  py-24">
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            Geen projecten gevonden met filter "{filter.cta}"
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Neem contact met ons op voor vragen of een gratis offerte.
          </p>
        </div>
      )}
    </>
  );
};
