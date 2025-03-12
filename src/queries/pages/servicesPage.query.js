import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";

export const servicesQuery = () => `
    query MyQuery {
      hero: servicesPageEntries {
        ... on fixedPage_Entry ${heroQuery}
      }
      
      services: servicesEntries {
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
