export interface Book {
  author?: string;
  description: string;
  id: string;
  imageUrl?: string;
  title: string;
}

export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string | undefined ? K : never;
}[keyof T];
