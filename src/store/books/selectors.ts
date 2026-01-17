import { type RootState } from "../index";

export const getBooks = ({ bookStore }: RootState) => bookStore.books;

export const getSelectedBookId = ({ bookStore }: RootState) =>
  bookStore.selectedBookId;

export const getSelectedBook = ({ bookStore }: RootState) =>
  bookStore.books.find(({ id }) => id === bookStore.selectedBookId) ?? null;
