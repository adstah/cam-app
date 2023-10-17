import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { username, password } = await req.json();
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.create({
    data: { username, passHash: bcrypt.hashSync(password, salt) },
  });
  return new Response(JSON.stringify(user), { status: 201 });
};
