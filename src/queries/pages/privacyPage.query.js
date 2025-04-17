import { heroQuery } from "@/queries/components/hero.query";

export const privacyQuery = () => `
    query MyQuery {
      hero: privacyPolicyEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        ... on privacyPolicy_Entry ${heroQuery}
      }
      
      policy: privacyPolicyEntries(site: "${process.env.NEXT_PUBLIC_SITE}") {
        description: privacyPolicy
      }
      
    }
`;
