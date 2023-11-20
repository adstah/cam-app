import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { writeFile, writeFileSync } from "fs";
import { resolve } from "path";

const primsa = new PrismaClient();

export const POST = async (req: Request) => {
  const { detectedObject, frame } = await req.json();
  const imgBuffer = Buffer.from(frame, "base64");
  writeFileSync(
    resolve("static/detections/person", `${randomUUID()}.jpg`),
    imgBuffer
  );
  return Response.json({});
};
