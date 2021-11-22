// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { doctors } from "Data/doctors";
import { IDoctors } from "Types/doctors";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<IDoctors[]>
) {
  res.status(200).json(doctors);
}
