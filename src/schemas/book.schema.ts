import { z } from "zod";

import {
  isValidImageExtension,
  getCommaSeparatedExtensions,
  isValidUrlFormat,
} from "@/shared/utils/imageValidation";
import { IMAGE_EXTENSIONS } from "@/shared/constants/imageExtensions";
import { MAX_DESCRIPTION_LENGTH } from "@/shared/constants/book";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().optional(),
  description: z
    .string()
    .max(
      MAX_DESCRIPTION_LENGTH,
      `Description must be at most ${MAX_DESCRIPTION_LENGTH} characters`,
    )
    .optional(),
  imageUrl: z
    .string()
    .refine((value) => isValidUrlFormat(value), {
      message: "Invalid URL format, URL must start with http:// or https://",
    })
    .refine((value) => isValidImageExtension(value), {
      message: `Image URL must point to a valid image file (${getCommaSeparatedExtensions(IMAGE_EXTENSIONS)})`,
    })
    .optional(),
});

export type BookFormData = z.infer<typeof bookSchema>;
