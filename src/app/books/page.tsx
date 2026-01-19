"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BookForm from "@/features/books/components/BookForm";
import BookFilters from "@/features/books/components/BookFilters";
import BookList from "@/features/books/components/BookList/BookList";
import { useFilteredBooks } from "@/features/books/hooks/useFilteredBooks";
import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";
import BookDetailContainer from "@/features/books/components/BookDetailContainer";

const BooksPage = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebouncedValue(searchText);
  const books = useFilteredBooks(debouncedSearchText);

  return (
    <>
      <Grid size={{ md: 6, xs: 12 }}>
        <BookForm />
      </Grid>
      <Grid
        size={{ md: 6, xs: 12 }}
        display="flex"
        flexDirection="column"
        height="100%"
      >
        <Box mb={2}>
          <BookFilters value={searchText} onChange={setSearchText} />
        </Box>
        <Box overflow="hidden">
          <BookList books={books} />
        </Box>
      </Grid>
      <BookDetailContainer />
    </>
  );
};

export default BooksPage;
