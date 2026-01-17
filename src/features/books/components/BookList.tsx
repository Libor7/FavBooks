import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getBooks } from "@/store/books.selectors";
import { selectBook } from "@/store/books.slice";
import BookItem from "./BookItem";

const BookList = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(getBooks);

  if (books.length === 0) {
    return <Typography color="text.secondary">No books added yet</Typography>;
  }

  return (
    <Stack spacing={2}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onSelect={(id) => dispatch(selectBook(id))}
        />
      ))}
    </Stack>
  );
};

export default BookList;
