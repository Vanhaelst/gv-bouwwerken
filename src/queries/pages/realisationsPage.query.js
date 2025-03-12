import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";

export const realisationsQuery = () => `
    query MyQuery {
      hero: realisationsPageEntries {
        ... on fixedPage_Entry ${heroQuery}
      }
      
      realisations: realisationsEntries(limit: 5) {
        ... on realisation_Entry {
          id
          heading
          uri
          image: featuredImage ${imageQuery}
        }
      }
      
      
    }
`;
