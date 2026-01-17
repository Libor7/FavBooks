import {
  SUPPORTED_IMAGE_EXTENSIONS,
  SUPPORTED_IMAGE_PROTOCOLS,
} from "@/shared/constants/imageExtensions.constants";

export const isValidImageExtension = (url: string) =>
  SUPPORTED_IMAGE_EXTENSIONS.some((ext) =>
    url.toLowerCase().endsWith(`.${ext}`),
  );

export const isValidUrlFormat = (value: string) => {
  try {
    const url = new URL(value);
    return SUPPORTED_IMAGE_PROTOCOLS.includes(url.protocol);
  } catch {
    return false;
  }
};

export const getCommaSeparatedExtensions = (extensions: readonly string[]) =>
  extensions.map((ext) => `.${ext}`).join(", ");
