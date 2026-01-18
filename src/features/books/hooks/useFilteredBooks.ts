"use client";

import { useMemo } from "react";

import { useAppSelector } from "@/store/hooks";
import { getBooks } from "@/store/books/selectors";
import type { Book, StringKeys } from "@/features/books/types/book";

export const useFilteredBooks = (
  query: string,
  property: StringKeys<Book> = "title",
) => {
  const books = useAppSelector(getBooks);
  const normalizedQuery = query.trim().toLowerCase();

  return useMemo(() => {
    if (!normalizedQuery) return books;

    return books.filter((book) => {
      return book[property]?.toLowerCase().includes(normalizedQuery);
    });
  }, [books, normalizedQuery, property]);
};
