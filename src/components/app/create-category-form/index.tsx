'use client';

import SubmitButton from '@/components/submit-button';
import { createPostCategory } from '@/lib/actions/post-actions';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import {
    ListBulletIcon,
    PencilIcon,
} from '@heroicons/react/24/outline';

function CreateCategoryForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createPostCategory, initialState);
    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6 dark:bg-gray-900">
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        İsim
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Kategori ismi giriniz"
                                aria-describedby="name-error"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-300"
                            />
                            <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-300" />
                        </div>
                        <div id="name-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.name &&
                                state.errors.name.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Sıra
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="order"
                                name="order"
                                type="number"
                                step="1"
                                placeholder="Sıra numarası giriniz"
                                aria-describedby="order-error"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-300"
                            />
                            <ListBulletIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-300" />
                        </div>
                        <div id="order-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.order &&
                                state.errors.order.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/admin/category"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    İptal
                </Link>
                <SubmitButton>Kaydet</SubmitButton>
            </div>
        </form>
    )
}

export default CreateCategoryForm;