import { imageQuery } from "@/queries/components/image.query";

export const realisationsQuery = ({ service, sold }) => `
    query MyQuery {
      realisations: realisationsEntries(
      site: "${process.env.NEXT_PUBLIC_SITE}" 
      ${sold !== "" ? `, sold: ${sold}` : ""} 
      ${service ? `, service: ["${service}"]` : ""}) {
        ... on realisation_Entry {
          id
          heading
          uri
          image: featuredImage ${imageQuery}
          price
          sold
        }
      } 
    }
`;
