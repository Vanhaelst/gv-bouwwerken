import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";
import { heroQuery } from "@/queries/components/hero.query";

export const realisationQuery = ({ slug }) => `
    query MyQuery {
       hero: realisationsEntries(slug: "${slug}") {
        ... on realisation_Entry ${heroQuery}
      }
      
      content: realisationsEntries(limit: 5, slug: "betonwerken-nieuwbouw") {
        ... on realisation_Entry {
          title: contentHeading
          description: contentDescription
          image: featuredImage ${imageQuery}
        }
      }
      
      lightbox: realisationsEntries(slug: "${slug}") {
        ... on realisation_Entry {
          image: images ${imageQuery}
          
        }
      }
      
      pagination: realisationsEntries(slug: "${slug}") {
        ... on realisation_Entry {
          prev(section: "realisations", orderBy: "postDate asc") {
            id
            slug
            title
            slug
          }
          next(section: "realisations", orderBy: "postDate asc") {
            id
            slug
            title
          }
        }
      }
      
    }
`;
