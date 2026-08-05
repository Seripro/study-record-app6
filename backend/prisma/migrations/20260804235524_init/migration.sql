-- CreateTable
CREATE TABLE "RECORD" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "RECORD_pkey" PRIMARY KEY ("id")
);
