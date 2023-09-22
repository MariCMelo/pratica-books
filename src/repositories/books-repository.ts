import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  const books = await prisma.book.findMany();

  return books;
}

export async function getBook(id: number) {
  const book = await prisma.book.findUnique({
    where: { id },
  });
  return book;
}

export async function createBook(book: CreateBook) {
  return await prisma.book.create({ data: book });
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId } = bookReview;
  return await prisma.book.update({
    data: bookReview,
    where: { id: bookId },
  });
}
