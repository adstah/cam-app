import { PrismaClient } from "@prisma/client";
import { revalidateTag } from "next/cache";

const prisma = new PrismaClient();

export const GET = async () => {
  const cameras = await prisma.camera.findMany();
  console.log(cameras);
  return Response.json(cameras);
};

export const POST = async (req: Request) => {
  const newCamera = await req.json();
  const user = await prisma.camera.create({ data: newCamera });
  revalidateTag("cameras");
  return Response.json(user);
};
