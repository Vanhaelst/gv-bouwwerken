import { heroQuery } from "@/queries/components/hero.query";
import { imageQuery } from "@/queries/components/image.query";
import { buttonsQuery } from "@/queries/components/buttons.query";

export const aboutQuery = () => `
    query MyQuery {
      hero: aboutUsEntries {
        ... on aboutUs_Entry ${heroQuery}
      }
      
      intro: aboutUsEntries {
        ... on aboutUs_Entry {
          id
          title: introHeading
          description: introDescription
          image: introImage ${imageQuery}
        }
      }
      
      contact: aboutUsEntries {
        ... on aboutUs_Entry {
          id
          title: contactHeading
          description: contactDescription
          buttons ${buttonsQuery}
        }
      }
      
      video: aboutUsEntries {
        ... on aboutUs_Entry {
          url: video
        }
      }
      
      introExtra: aboutUsEntries {
        ... on aboutUs_Entry {
          id
          title: introExtraHeading
          description: introExtraDescription
          image: introExtraImage {
            url
            width
            height
            alt
          }
          buttons {
            ... on button_Entry {
              id
              href
              cta
            }
          }
        }
      }  
    }
`;
