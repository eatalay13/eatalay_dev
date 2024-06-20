import CategoriesTable from "@/components/app/admin/category/list-table";
import { CreateButton } from "@/components/app/crud-button";
import Pagination from "@/components/pagination";
import Search from "@/components/search-field";
import { TableSkeleton } from "@/components/skeletons";
import { getTotalPagePostCategories } from "@/data/post-data";
import { lusitana } from "@/lib/fonts";
import { Suspense } from "react";

interface CategoriesProps {
    searchParams?: {
        query?: string;
        page?: string;
    }
}

async function CategoriesPage({ searchParams }: CategoriesProps) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await getTotalPagePostCategories(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Kategoriler</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Kategory Ara..." />
                <CreateButton href="/admin/category/create">
                    Yeni Kategori Ekle
                </CreateButton>
            </div>
            <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
                <CategoriesTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}

export default CategoriesPage;