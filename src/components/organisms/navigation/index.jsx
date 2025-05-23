import { NavigationClient } from "./navigation";
import { fetchData } from "@/utils/fetchData";

async function getData() {
  return fetchData(`
    query MyQuery {
      topbar: globalSet(site: "${process.env.NEXT_PUBLIC_SITE}", handle: "topbar") {
        ... on topbar_GlobalSet {
          navigationitems {
            ... on navigationitem_Entry {
              id
              title
              href
            }
          }
          lang
        }
      }
      
      nav: globalSet(site: "${process.env.NEXT_PUBLIC_SITE}", handle: "navigation") {
        ... on navigation_GlobalSet {
          login
          account
          navigationitems {
            ... on navigationitem_Entry {
              id
              title
              href
              children: navigationitems {
                ... on navigationitem_Entry {
                  id
                  title
                  href
                }
              }
            }
          }
        }
      }
    }
  `);
}

export async function Navigation() {
  const { topbar, nav } = await getData();

  return (
    <NavigationClient
      nav={nav.navigationitems}
      topbar={topbar.navigationitems}
      extraNav={[]}
    />
  );
}
