// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma, Company } from '@prisma/client'

const prisma = new PrismaClient();

interface IMessage { message: string }

export default async (req: NextApiRequest, res: NextApiResponse<Company | IMessage>) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed!' })
  }

  try {
    const company: Prisma.CompanyCreateInput = JSON.parse(req.body)
    const savedCompany = await prisma.company.create({ data: company })
    res.status(200).json(savedCompany)
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong!' })
  }
}
