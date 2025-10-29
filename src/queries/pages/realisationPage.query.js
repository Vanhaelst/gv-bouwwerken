import { imageQuery } from "@/queries/components/image.query";
import { heroQuery } from "@/queries/components/hero.query";

export const realisationQuery = ({ slug }) => `
    query MyQuery {
       hero: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", slug: "${slug}") {
        ... on realisation_Entry ${heroQuery}
      }
      
      content: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", slug: "${slug}") {
        ... on realisation_Entry {
          id
          url
          title: contentHeading
          intro: introDescription
          description: contentDescription
          image: featuredImage ${imageQuery}
          price
          sold
        }
      }
      
      fishe: realisationsEntries(site: "${process.env.NEXT_PUBLIC_SITE}", slug: "${slug}") {
        ... on realisation_Entry {
          fishe
          
          accordion {
            ... on accordionItem_Entry {
              id
              title
              items: ficheItems {
                ... on ficheItem_Entry {
                  id
                  title
                  description
                }
              }
            }
          }
          
          attachments {
            id
            url
            size
            title
            filename
          }
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
