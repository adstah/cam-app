-- CreateTable
CREATE TABLE "User" (
    "uuid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "passHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Camera" (
    "uuid" UUID NOT NULL,
    "location" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Detections" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "detectedObject" TEXT NOT NULL,
    "cameraId" UUID NOT NULL,

    CONSTRAINT "Detections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Detections" ADD CONSTRAINT "Detections_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "Camera"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
