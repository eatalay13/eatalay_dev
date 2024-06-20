export type FormState<T> = {
    errors?: {
        [K in keyof T]?: string[];
    };
    message?: string | null;
};