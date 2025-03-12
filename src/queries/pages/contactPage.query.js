import { heroQuery } from "@/queries/components/hero.query";

export const contactQuery = () => `
    query MyQuery {
      hero: contactEntries{
        ... on contact_Entry ${heroQuery}
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
