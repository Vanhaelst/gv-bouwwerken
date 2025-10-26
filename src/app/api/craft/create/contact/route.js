import { GraphQLClient, gql } from "graphql-request";

import { NextResponse } from "next/server";
import { craftUrl } from "@/utils/fetchData";

const graphQLClient = new GraphQLClient(craftUrl, {
  headers: {
    Authorization: "Bearer JYZ6XcF_A15nBvbMC1SOiM14Zk-YxNE8",
  },
});

export async function POST(request, response) {
  const body = await request.json();

  const mutation = gql`
    mutation saveEntry(
      $title: String!
      $phone: String!
      $mail: String!
      $message: String!
      $project: String!
      $id: String!
      $slug: String!
    ) {
      save_contactForm_contactForm_Entry(
        title: $title
        phone: $phone
        mail: $mail
        message: $message
        project: $project
        originId: $id
        originSlug: $slug

        siteId: ${Number(process.env.CRAFT_SITE_ID)}
        authorId: ${Number(process.env.CRAFT_AUTHOR_ID)}
        
        enabled: false
      ) {
        title
      }
    }
  `;

  const result = await graphQLClient
    .request(mutation, {
      title: body.title,
      phone: body.phone,
      mail: body.mail,
      message: body.message,
      project: body.project,
      slug: body.slug,
      id: body.id,
    })
    .then((res) => res)
    .catch((err) => err);

  console.log(result);
  return NextResponse.json(result, {
    status: 200,
  });
}
