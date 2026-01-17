import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { Book } from "@/features/books/types/book";
import classes from "./BookItem.module.scss";

type BookItemProps = {
  book: Book;
  onSelect: (id: string) => void;
};

const BookItem = ({ book, onSelect }: BookItemProps) => {
  const { id, title } = book;

  return (
    <Box
      role="button"
      className={classes.bookItem}
      onClick={() => onSelect(id)}
    >
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
};

export default BookItem;
