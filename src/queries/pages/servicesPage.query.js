import { heroQuery } from "@/queries/components/hero.query";
import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";

export const servicesQuery = () => `
    query MyQuery {
      hero: servicesPageEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        ... on fixedPage_Entry ${heroQuery}
      }
      
      services: servicesEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        ... on service_Entry {
          id
          title: heading
          description
          image ${imageQuery}
          buttons ${buttonsQuery}
        }
      }


    }
`;
