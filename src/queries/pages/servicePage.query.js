import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";

export const serviceQuery = ({ slug }) => `
    query MyQuery {
      services: servicesEntries(slug: "${slug}") {
        ... on service_Entry {
          id
          title: heading
          subtitle: subheading
          description
          image ${imageQuery}
          buttons ${buttonsQuery}
        }
      }
      
      realisations: realisationsEntries(limit: 6) {
        ... on realisation_Entry {
          id
          heading
          uri
          image: featuredImage ${imageQuery}
        }
      }
      
      
    }
`;
