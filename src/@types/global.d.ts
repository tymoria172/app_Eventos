declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(
      name: string,
      value: FormDataValue | string | Blob | Object,
      fileName?: string
    ): void;
    set(
      name: string,
      value: FormDataValue | string | Blob | Object,
      fileName?: string
    ): void;
  }
}
