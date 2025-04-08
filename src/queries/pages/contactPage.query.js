import { heroQuery } from "@/queries/components/hero.query";
import { imageQuery } from "@/queries/components/image.query";

export const contactQuery = () => `
    query MyQuery {
      hero: contactEntries{
        ... on contact_Entry ${heroQuery}
      }
      
      content: contactEntries{
        ... on contact_Entry {
        image: image2 ${imageQuery}
        }
      }
      
      globals: globalSet(handle: "companyData") {
        ... on companyData_GlobalSet {
          phone
          mail
          address1
          address2
        }
      }
      
    }
`;
