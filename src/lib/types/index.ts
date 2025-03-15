export type FormState<T> = {
  errors?: {
    [key in keyof T]?: string[];
  };
  message?: string;
};
