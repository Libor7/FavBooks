import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

import { type BookFormData, bookSchema } from "@/schemas/book.schema";
import { addBook } from "@/store/books.slice";
import { useAppDispatch } from "@/store/hooks";
import CharacterCounter from "@/shared/ui/CharacterCounter";
import { MAX_BOOK_DESCRIPTION_LENGTH } from "@/shared/constants/book.constants";

const BookForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      author: "",
      description: "",
      imageUrl: "",
    },
  });

  // React Hook Form `watch()` is not compatible with React Compiler memoization.
  // This value is intentionally used without memoization because it reflects
  // real-time form state and is not passed to memoized components.
  // eslint-disable-next-line react-hooks/incompatible-library
  const descriptionValue = watch("description");

  const onSubmit = (data: BookFormData) => {
    dispatch(
      addBook({
        ...data,
        id: uuidv4(),
      }),
    );

    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={3}>
        <TextField
          label="Title"
          fullWidth
          required
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register("title")}
        />
        <TextField
          label="Author"
          fullWidth
          error={!!errors.author}
          helperText={errors.author?.message}
          {...register("author")}
        />
        <Box>
          <TextField
            label="Description"
            fullWidth
            multiline
            minRows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register("description")}
            slotProps={{
              htmlInput: { maxLength: 300 },
            }}
          />
          <CharacterCounter
            currentLength={descriptionValue.length}
            maxLength={MAX_BOOK_DESCRIPTION_LENGTH}
          />
        </Box>
        <TextField
          label="Image URL"
          fullWidth
          error={!!errors.imageUrl}
          helperText={errors.imageUrl?.message}
          {...register("imageUrl")}
        />
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          Add book
        </Button>
      </Stack>
    </Box>
  );
};

export default BookForm;
