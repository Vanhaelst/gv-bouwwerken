import { imageQuery } from "@/queries/components/image.query";
import { heroQuery } from "@/queries/components/hero.query";

export const realisationsPageQuery = ({ service }) => `
    query MyQuery {
      hero: realisationsPageEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        ... on fixedPage_Entry ${heroQuery}
      }
      
      realisations: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}" ${service ? `, service: ["${service}"]` : ""}) {
        ... on realisation_Entry {
          id
          heading
          uri
          image: featuredImage ${imageQuery}
        }
      }
      
      
    }
`;
