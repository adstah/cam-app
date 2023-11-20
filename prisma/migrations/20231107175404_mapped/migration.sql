/*
  Warnings:

  - You are about to drop the `Camera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Detection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Detection" DROP CONSTRAINT "Detection_cameraId_fkey";

-- DropTable
DROP TABLE "Camera";

-- DropTable
DROP TABLE "Detection";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "uuid" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "passHash" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "cameras" (
    "uuid" UUID NOT NULL,
    "location" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "cameras_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "detections" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "detectedObject" TEXT NOT NULL,
    "cameraId" UUID NOT NULL,

    CONSTRAINT "detections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "detections" ADD CONSTRAINT "detections_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "cameras"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
