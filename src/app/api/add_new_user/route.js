import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { kindeId } = req.body;

    // Check if the user exists in the database.
    const existingUser = await prisma.users.findUnique({
      where: { kindeId },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'You are already a user' });
    }

    try {
        const user = await prisma.users.create({
          data: { kindeId },
        });
        console.log(`User with kindeId: ${kindeId} added to the DB successfully!`);
      } catch (error) {
        console.error(`User with kindeId: ${kindeId} not successfully addedto the DB.`);
      }

    return res.status(200).json({ userAdded: "Your account was created!" });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
