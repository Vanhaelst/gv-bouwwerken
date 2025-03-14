import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";
import { SITE } from "@/enums/site";

export const realisationsQuery = ({ service }) => `
    query MyQuery {
      realisations: realisationsEntries(sites: ["${SITE.bouwwerken}"] ${service ? ', service: ["${service}"]' : ""}) {
        ... on realisation_Entry {
          id
          heading
          uri
          image: featuredImage ${imageQuery}
        }
      } 
    }
`;
