import { PrismaClient } from "@prisma/client";
import { createKindeManagementAPIClient } from "@kinde-oss/kinde-auth-nextjs/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  const kindClient = await createKindeManagementAPIClient();
  const userInfo = kindClient.usersApi.getUserData();
  const userKindeId = (await userInfo).id;
  console.log((await userInfo).id);

  const { taskName, taskDescription } = req.body;

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
        name: taskName,
        description: taskDescription,
      },
    });

    return res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
