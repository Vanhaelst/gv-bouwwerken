import { imageQuery } from "@/queries/components/image.query";
import { heroQuery } from "@/queries/components/hero.query";

export const realisationQuery = ({ slug }) => `
    query MyQuery {
       hero: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", slug: "${slug}") {
        ... on realisation_Entry ${heroQuery}
      }
      
      content: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", slug: "${slug}") {
        ... on realisation_Entry {
          title: contentHeading
          description: contentDescription
          image: featuredImage ${imageQuery}
        }
      }
      
      lightbox: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", slug: "${slug}") {
        ... on realisation_Entry {
          image: images ${imageQuery}
          
        }
      }
      
      pagination: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", slug: "${slug}") {
        ... on realisation_Entry {
          prev(section: "realisations", orderBy: "postDate asc") {
            id
            slug
            title
            image: featuredImage ${imageQuery}
          }
          next(section: "realisations", orderBy: "postDate asc") {
            id
            slug
            title
            image: featuredImage ${imageQuery}
          }
        }
      }
      
    }
`;
