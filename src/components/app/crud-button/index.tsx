import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface CreateButtonProps {
    children: React.ReactNode;
    href: string;
}

function CreateButton(props: CreateButtonProps) {
    return (
        <Link
            href={props.href}
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">
                {props.children}
            </span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

interface UpdateButtonProps {
    href: string;
}

function UpdateButton(props: UpdateButtonProps) {
    return (
        <Link
            href={props.href}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

interface DeleteButtonProps {
    deleteAction?: () => void;
}

export function DeleteInvoice({ deleteAction }: DeleteButtonProps) {
    const deleteInvoiceWithId = deleteAction;
    return (
        <>
            <form action={deleteInvoiceWithId}>
                <button className="rounded-md border p-2 hover:bg-gray-100">
                    <span className="sr-only">Sil</span>
                    <TrashIcon className="w-5" />
                </button>
            </form>
        </>
    );
}



export { CreateButton, UpdateButton };

