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
      $role: String!
      $diploma: String
      $major: String
      $practice: String
      $company: String
      $function: String
      $firstname: String!
      $lastname: String!
      $phone: String!
      $mail: String!
      $message: String!
    ) {
      save_contactForm_contactform_Entry(
        title: $title
        role: $role
        diploma: $diploma
        major: $major
        practice: $practice
        company: $company
        function: $function
        firstname: $firstname
        lastname: $lastname
        phone: $phone
        mail: $mail
        message: $message

        enabled: false
      ) {
        title
      }
    }
  `;

  const result = await graphQLClient
    .request(mutation, {
      ...body,
    })
    .then((res) => res)
    .catch((err) => err);

  return NextResponse.json(result, {
    status: 200,
  });
}
