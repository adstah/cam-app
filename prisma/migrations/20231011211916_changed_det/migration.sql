/*
  Warnings:

  - You are about to drop the `Detections` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Detections" DROP CONSTRAINT "Detections_cameraId_fkey";

-- DropTable
DROP TABLE "Detections";

-- CreateTable
CREATE TABLE "Detection" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "detectedObject" TEXT NOT NULL,
    "cameraId" UUID NOT NULL,

    CONSTRAINT "Detection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Detection" ADD CONSTRAINT "Detection_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "Camera"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
