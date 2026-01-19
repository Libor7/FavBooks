"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getSelectedBook, getSelectedBookId } from "@/store/books/selectors";
import { deselectBook, removeBook } from "@/store/books/slice";
import Modal from "@/shared/ui/Modal/Modal";
import BookDetail from "./BookDetail/BookDetail";

const BookDetailContainer = () => {
  const dispatch = useAppDispatch();
  const book = useAppSelector(getSelectedBook);
  const selectedBookId = useAppSelector(getSelectedBookId);

  if (!book) return null;

  const handleClose = () => {
    dispatch(deselectBook());
  };

  const handleDelete = (id: string) => {
    dispatch(removeBook(id));
  };

  return (
    <Modal open={!!selectedBookId} onClose={handleClose}>
      <BookDetail book={book} onClose={handleClose} onDelete={handleDelete} />
    </Modal>
  );
};

export default BookDetailContainer;
