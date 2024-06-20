import z from 'zod';

export const createPostCategoryShema = z.object({
    name: z.string({
        required_error: 'İsim zorunludur',
        invalid_type_error: 'İsim metin olmalıdır',
    })
        .min(1, 'İsim en az 1 karakter olmalıdır')
        .max(50, 'İsim en fazla 50 karakter olmalıdır'),

    order: z.string({
        required_error: 'Sıra zorunludur',
        invalid_type_error: 'Sıra sayı olmalıdır',
    }),
});