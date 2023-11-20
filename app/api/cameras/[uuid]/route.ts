import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: Request, { uuid }: { uuid: string }) => {
  const camera = await prisma.camera.findFirstOrThrow({ where: { uuid } });
  return Response.json(camera);
};
