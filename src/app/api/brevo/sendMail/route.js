import { NextResponse } from "next/server";

const url = "https://api.brevo.com/v3/smtp/email";

export async function POST(req, res) {
  const body = (await req.json()) ?? {};
  const { templateId, data } = body ?? {};

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      templateId: templateId,
      sender: {
        email: "noreply@bouwwerken-gv.be",
        name: "Bouwwerken GV",
      },
      to: [
        {
          email: "noreply@bouwwerken-gv.be",
          name: "Bouwwerken GV",
        },
      ],
      params: data,
    }),
  };

  const result = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => ({ status: 200, ...json }))
    .catch((err) => console.error("catch", err));

  return NextResponse.json(result, { status: 200 });
}
