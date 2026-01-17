import {
  IMAGE_EXTENSIONS,
  IMAGE_PROTOCOLS,
} from "@/shared/constants/imageExtensions";

export const isValidImageExtension = (url: string) =>
  IMAGE_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(`.${ext}`));

export const isValidUrlFormat = (value: string) => {
  try {
    const url = new URL(value);
    return IMAGE_PROTOCOLS.includes(url.protocol);
  } catch {
    return false;
  }
};

export const getCommaSeparatedExtensions = (extensions: readonly string[]) =>
  extensions.map((ext) => `.${ext}`).join(", ");
