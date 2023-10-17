import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  console.log(req);
  const user = await prisma.user.findFirst({
    where: { username: "user1" },
  });
  return Response.json({ user, apiToken: "a" });
};
