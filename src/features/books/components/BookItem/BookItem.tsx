import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import type { Book } from "@/features/books/types/book";
import classes from "./BookItem.module.scss";

type BookItemProps = {
  book: Book;
  onSelect: (id: string) => void;
};

const BookItem = ({ book: { id, title }, onSelect }: BookItemProps) => {
  return (
    <ListItemButton
      className={classes.bookItem}
      onClick={() => onSelect(id)}
      sx={{
        "&:hover": {
          backgroundColor: (theme) => theme.palette.primary.dark,
        },
      }}
    >
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

export default BookItem;
