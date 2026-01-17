"use client";

import { useState } from "react";

import BookFilters from "@/features/books/components/BookFilters";
import BookList from "@/features/books/components/BookList/BookList";
import { useFilteredBooks } from "@/features/books/hooks/useFilteredBooks";
import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";

const BooksPage = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedValue(search);
  const books = useFilteredBooks(debouncedSearch);

  return (
    <>
      <BookFilters value={search} onChange={setSearch} />
      <BookList books={books} />
    </>
  );
};

export default BooksPage;
