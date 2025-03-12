import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";

export const realisationsQuery = () => `
    query MyQuery {
      realisations: realisationsEntries(limit: 5) {
        ... on realisation_Entry {
          id
          heading
          image: featuredImage ${imageQuery}
        }
      }
      
      
    }
`;
