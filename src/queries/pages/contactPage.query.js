import { heroQuery } from "@/queries/components/hero.query";
import { imageQuery } from "@/queries/components/image.query";

export const contactQuery = () => `
    query MyQuery {
      hero: contactEntries(site: "${process.env.NEXT_PUBLIC_SITE}"){
        ... on contact_Entry ${heroQuery}
      }
      
      content: contactEntries(site: "${process.env.NEXT_PUBLIC_SITE}"){
        ... on contact_Entry {
        contentHeading
        image: image2 ${imageQuery}
        }
      }
      
      globals: globalSet(site: "${process.env.NEXT_PUBLIC_SITE}", handle: "companyData") {
        ... on companyData_GlobalSet {
          phone
          mail
          address1
          address2
        }
      }
      
    }
`;
