-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "stock" INTEGER,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
