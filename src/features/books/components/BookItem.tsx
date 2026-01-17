import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { Book } from "@/models/book";

type BookItemProps = {
  book: Book;
  onSelect: (id: string) => void;
};

const BookItem = ({ book, onSelect }: BookItemProps) => {
  const { id, title } = book;

  return (
    <Box
      role="button"
      onClick={() => onSelect(id)}
      sx={{
        paddingY: 1.5,
        paddingX: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
};

export default BookItem;
