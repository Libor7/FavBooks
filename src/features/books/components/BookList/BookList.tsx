"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import Box from "@mui/material/Box";

import { useAppDispatch } from "@/store/hooks";
import { selectBook } from "@/store/books/slice";
import BookItem from "../BookItem/BookItem";
import { type Book } from "@/features/books/types/book";
import classes from "./BookList.module.scss";
import EmptyState from "@/shared/ui/EmptyState/EmptyState";

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  const dispatch = useAppDispatch();
  const parentRef = useRef<HTMLDivElement>(null);

  /**
   * WARNING: `useVirtualizer` from @tanstack/react-virtual is not compatible with React Compiler memoization.
   * React Compiler cannot safely memoize hooks returned by this library, so we disable the incompatible-library rule here.
   * This is safe because:
   *  - The virtualizer is fully controlled by props (books.length, parentRef)
   *  - We do not memoize its return value; it's re-computed on each render
   *  - The UI will remain consistent and performant
   */
  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: books.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60,
    gap: 4,
    overscan: 50,
  });

  if (books.length === 0) {
    return <EmptyState message="No books added yet" />;
  }

  return (
    <Box ref={parentRef} className={classes.listContainer}>
      <Box
        className={classes.virtualList}
        height={rowVirtualizer.getTotalSize()}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const book = books[virtualRow.index];

          return (
            <Box
              key={book.id}
              ref={rowVirtualizer.measureElement}
              data-index={virtualRow.index}
              className={classes.virtualRow}
              sx={{ transform: `translateY(${virtualRow.start}px)` }}
            >
              <BookItem
                book={book}
                onSelect={(id) => dispatch(selectBook(id))}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default BookList;
