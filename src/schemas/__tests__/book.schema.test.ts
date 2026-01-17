import { IMAGE_EXTENSIONS } from "@/shared/constants/imageExtensions";
import {
  isValidImageExtension,
  isValidUrlFormat,
  getCommaSeparatedExtensions,
} from "@/shared/utils/imageValidation";
import { bookSchema } from "../book.schema";
import { MAX_BOOK_DESCRIPTION_LENGTH } from "@/shared/constants/book.constants";

describe("Book Schema Validation", () => {
  it("should pass with valid book data", () => {
    const validBook = {
      title: "My Book",
      author: "John Doe",
      description: "A short description",
      imageUrl: "https://example.com/image.jpg",
    };

    expect(bookSchema.parse(validBook)).toEqual(validBook);
  });

  it("should fail if title is empty", () => {
    const result = bookSchema.safeParse({ title: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Title is required");
      expect(result.error.issues[0].path).toEqual(["title"]);
    }
  });

  it("should pass if author is missing (optional)", () => {
    const data = { title: "Book Without Author" };
    expect(bookSchema.parse(data)).toEqual(data);
  });

  it(`should fail if description exceeds ${MAX_BOOK_DESCRIPTION_LENGTH} characters`, () => {
    const longDesc = "a".repeat(301);
    const result = bookSchema.safeParse({
      title: "Book",
      description: longDesc,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        `Description must be at most ${MAX_BOOK_DESCRIPTION_LENGTH} characters`,
      );
      expect(result.error.issues[0].path).toEqual(["description"]);
    }
  });

  it(`should pass if description is exactly ${MAX_BOOK_DESCRIPTION_LENGTH} characters`, () => {
    const maxDesc = "a".repeat(MAX_BOOK_DESCRIPTION_LENGTH);
    const data = { title: "Book", description: maxDesc };
    expect(bookSchema.parse(data)).toEqual(data);
  });

  it("should fail if imageUrl has invalid URL format", () => {
    const invalidUrl = "invalid-url.jpg";
    const result = bookSchema.safeParse({
      title: "Book",
      imageUrl: invalidUrl,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        "Invalid URL format, URL must start with http:// or https://",
      );
      expect(result.error.issues[0].path).toEqual(["imageUrl"]);
    }
  });

  it("should fail if imageUrl has invalid protocol", () => {
    const ftpUrl = "ftp://example.com/image.jpg";
    const result = bookSchema.safeParse({ title: "Book", imageUrl: ftpUrl });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        "Invalid URL format, URL must start with http:// or https://",
      );
      expect(result.error.issues[0].path).toEqual(["imageUrl"]);
    }
  });

  it("should fail if imageUrl has invalid file extension", () => {
    const invalidExtUrl = "https://example.com/image.docx";
    const result = bookSchema.safeParse({
      title: "Book",
      imageUrl: invalidExtUrl,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        `Image URL must point to a valid image file (${getCommaSeparatedExtensions(
          IMAGE_EXTENSIONS,
        )})`,
      );
      expect(result.error.issues[0].path).toEqual(["imageUrl"]);
    }
  });

  it("should pass with valid image extensions (case-insensitive)", () => {
    IMAGE_EXTENSIONS.forEach((ext) => {
      const url = `https://example.com/photo.${ext.toUpperCase()}`;
      const data = { title: "Book", imageUrl: url };
      expect(bookSchema.parse(data)).toEqual(data);
    });
  });
});

describe("Image Validation Utils", () => {
  it("isValidUrlFormat returns true for valid http/https URLs", () => {
    expect(isValidUrlFormat("http://example.com")).toBe(true);
    expect(isValidUrlFormat("https://example.com")).toBe(true);
  });

  it("isValidUrlFormat returns false for invalid URLs or protocols", () => {
    expect(isValidUrlFormat("ftp://example.com")).toBe(false);
    expect(isValidUrlFormat("not-a-url")).toBe(false);
  });

  it("isValidImageExtension returns true for valid extensions", () => {
    IMAGE_EXTENSIONS.forEach((ext) => {
      expect(isValidImageExtension(`https://example.com/image.${ext}`)).toBe(
        true,
      );
    });
  });

  it("isValidImageExtension returns false for invalid extensions", () => {
    expect(isValidImageExtension("https://example.com/file.txt")).toBe(false);
  });

  it("getCommaSeparatedExtensions returns correct string", () => {
    expect(getCommaSeparatedExtensions(IMAGE_EXTENSIONS)).toBe(
      IMAGE_EXTENSIONS.map((ext) => `.${ext}`).join(", "),
    );
  });
});
