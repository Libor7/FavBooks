"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BookForm from "@/features/books/components/BookForm";
import BookFilters from "@/features/books/components/BookFilters";
import BookList from "@/features/books/components/BookList/BookList";
import { useFilteredBooks } from "@/features/books/hooks/useFilteredBooks";
import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";

const BooksPage = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedValue(search);
  const books = useFilteredBooks(debouncedSearch);

  return (
    <Grid container spacing={2} sx={{ p: 2, height: "100vh" }}>
      <Grid size={{ md: 6, xs: 12 }} sx={{ height: "100%" }}>
        <BookForm />
      </Grid>
      <Grid
        size={{ md: 6, xs: 12 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <BookFilters value={search} onChange={setSearch} />
        </Box>
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <BookList books={books} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BooksPage;
