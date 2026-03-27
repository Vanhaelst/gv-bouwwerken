export const seoQuery = ({ page, entry }) => {
  return `
    query seo {
      seo: ${page} {
        ... on ${entry} {
          id
          seo {
            seoTitle
            seoDescription
            seoKeywords
            seoImage { url }
          }
        }
      }
    }
  `;
};
