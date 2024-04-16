import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  const { getUser } = getKindeServerSession();
  const userInfo = await getUser();
  const userKindeId = userInfo.id;
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, description } = req.body;

  try {
    let user = await prisma.users.findUnique({
      where: {
        kindeId: userKindeId,
      },
    });

    if (!user) {
      user = await prisma.users.create({
        data: {
          kindeId: userKindeId,
        },
      });
      return res.status(201).json({ userCreated: true, user });
    }

    const newTodo = await prisma.todos.create({
      data: {
        userId: user.id,
        name: name,
        description: description,
      },
    });

    return res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
