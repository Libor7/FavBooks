import { useMemo } from "react";

import { useAppSelector } from "@/store/hooks";
import { getBooks } from "@/store/books.selectors";
import type { Book } from "@/models/book";

export const useFilteredBooks = (
  query: string,
  property: keyof Book = "title",
) => {
  const books = useAppSelector(getBooks);
  const normalizedQuery = query.trim().toLowerCase();

  return useMemo(() => {
    if (!normalizedQuery) return books;

    return books.filter((book) => {
      if (typeof book[property] !== "string") {
        throw new Error(
          `useFilteredBooks: property "${property}" is not a string`,
        );
      }
      return book[property].toLowerCase().includes(normalizedQuery);
    });
  }, [books, normalizedQuery, property]);
};
