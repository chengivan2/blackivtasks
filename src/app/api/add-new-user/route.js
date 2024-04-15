import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
  if (req.method === 'POST') {
    const { kindeId } = req.body;

    // Check if the user exists in the database.
    const existingUser = await prisma.users.findUnique({
      where: { kindeId },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Add the user to the database.
    const user = await prisma.users.create({
      data: { kindeId },
    });

    return res.status(200).json(user);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
