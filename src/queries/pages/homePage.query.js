import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";

export const homeQuery = () => `
    query MyQuery {
      hero: homeEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        ... on home_Entry ${heroQuery}
      }
      
      intro: homeEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        ... on home_Entry {
          id
          title: introHeading
          description: introDescription
          image: introImage ${imageQuery}
          buttons ${buttonsQuery}
        }
      }
      
      realisation: homeEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        ... on home_Entry {
          title: realisationHeading
          description: realisationDescription
        }
      }
      
      realisations: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", limit: 5) {
        ... on realisation_Entry {
          id
          uri
          heading
          image: featuredImage ${imageQuery}
          sold
        }
      }
      
      
    }
`;
