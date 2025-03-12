import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";

export const homeQuery = () => `
    query MyQuery {
      hero: homeEntries {
        ... on home_Entry ${heroQuery}
      }
      
      intro: homeEntries {
        ... on home_Entry {
          id
          title: introHeading
          description: introDescription
          image: introImage ${imageQuery}
          buttons ${buttonsQuery}
        }
      }
      
      realisation: homeEntries {
        ... on home_Entry {
          title: realisationHeading
          description: realisationDescription
        }
      }
      
      realisations: realisationsEntries(limit: 5) {
        ... on realisation_Entry {
          id
          heading
          image: featuredImage ${imageQuery}
        }
      }
      
      
    }
`;
