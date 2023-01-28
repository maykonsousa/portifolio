// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = await axios.get(
    "https://nvl-setup-community-server-production.up.railway.app/users",
    {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heWtvbi0yMzYiLCJpZCI6ImNmNWE0MjNjLWJjYTEtNDMxZS1iMzhkLTMyZTBkZTliODhmNSIsImlhdCI6MTY3NDg3Mzk2OSwiZXhwIjoxNjc0OTYwMzY5LCJzdWIiOiJjZjVhNDIzYy1iY2ExLTQzMWUtYjM4ZC0zMmUwZGU5Yjg4ZjUifQ.EBel1kURBbAFj8Nrug2eMZOqhQDr7EXtx8NmV2Ve7Sc"}`,
      },
    }
  );

  res.status(200).json(users.data);
}
