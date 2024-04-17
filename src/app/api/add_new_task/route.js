import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { createKindeManagementAPIClient } from "@kinde-oss/kinde-auth-nextjs/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  const kindClient = await createKindeManagementAPIClient();
  const userInfo = kindClient.usersApi.getUserData();
  const userKindeId = (await userInfo).id;
  console.log((await userInfo).id);
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
