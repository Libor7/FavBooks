import { z } from "zod";

import {
  isValidImageExtension,
  getCommaSeparatedExtensions,
  isValidUrlFormat,
} from "@/shared/utils/imageValidation";
import { SUPPORTED_IMAGE_EXTENSIONS } from "@/shared/constants/imageExtensions.constants";
import { MAX_BOOK_DESCRIPTION_LENGTH } from "@/shared/constants/book.constants";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().optional(),
  description: z
    .string()
    .max(
      MAX_BOOK_DESCRIPTION_LENGTH,
      `Description must be at most ${MAX_BOOK_DESCRIPTION_LENGTH} characters`,
    ),
  imageUrl: z
    .string()
    .optional()
    .refine((value) => !value || isValidUrlFormat(value), {
      message: "Invalid URL format, URL must start with http:// or https://",
    })
    .refine((value) => !value || isValidImageExtension(value), {
      message: `Image URL must point to a valid image file (${getCommaSeparatedExtensions(SUPPORTED_IMAGE_EXTENSIONS)})`,
    }),
});

export type BookFormData = z.infer<typeof bookSchema>;
