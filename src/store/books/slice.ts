import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type Book } from "@/features/books/types/book";
import { MAX_BOOK_DESCRIPTION_LENGTH } from "@/shared/constants/book.constants";

interface BooksState {
  books: Book[];
  selectedBookId: string | null;
}

const initialState: BooksState = {
  books: [],
  selectedBookId: null,
};

const booksSlice = createSlice({
  name: "bookStore",
  initialState,
  reducers: {
    addBook(state, { payload: book }: PayloadAction<Book>) {
      book.description = book.description.slice(0, MAX_BOOK_DESCRIPTION_LENGTH);
      state.books.push(book);
    },
    removeBook(state, { payload: bookId }: PayloadAction<string>) {
      state.books = state.books.filter(({ id }) => id !== bookId);

      if (state.selectedBookId === bookId) {
        state.selectedBookId = null;
      }
    },
    selectBook(state, { payload }: PayloadAction<string>) {
      state.selectedBookId = payload;
    },
    deselectBook(state) {
      state.selectedBookId = null;
    },
  },
});

export const { addBook, removeBook, selectBook, deselectBook } =
  booksSlice.actions;

export default booksSlice.reducer;
