/*
  Warnings:

  - You are about to drop the `RECORD` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RECORD";

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);
