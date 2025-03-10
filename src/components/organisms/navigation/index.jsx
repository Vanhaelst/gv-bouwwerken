import { NavigationClient } from "./navigation";
import { fetchData } from "@/utils/fetchData";
import {nav, topbar} from "@/components/organisms/navigation/navigation.data";

async function getData({ locale }) {
  return fetchData(`
    query MyQuery {
      topbar: globalSet(handle: "topbar", language: "${locale}") {
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
      
      nav: globalSet(handle: "navigation", language: "${locale}") {
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

export async function Navigation({ locale, permissions }) {
  // const { topbar, nav } = await getData({ locale });

  return (
    <NavigationClient
      nav={nav}
      topbar={topbar}
    />
  );
}
