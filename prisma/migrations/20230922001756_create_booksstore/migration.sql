-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "grade" INTEGER NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
