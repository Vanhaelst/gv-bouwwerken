import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";

export const privacyQuery = () => `
    query MyQuery {
      hero: privacyPolicyEntries {
        ... on privacyPolicy_Entry ${heroQuery}
      }
      
      policy: privacyPolicyEntries {
        description: privacyPolicy
      }
      
    }
`;
