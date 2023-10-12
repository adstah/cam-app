import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const cameras = await prisma.camera.findMany();
  return Response.json(cameras);
};

export const POST = async (req: Request) => {
  const user = await prisma.camera.create({
    data: {
      location: "test location",
      url: "http://",
    },
  });
  return Response.json(user);
};
