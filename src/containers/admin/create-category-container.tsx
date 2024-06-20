import CreateCategoryForm from '@/components/app/create-category-form';
import Breadcrumbs from '@/components/breadcrumbs';

function CreateCategoryContainer() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Kategoriler', href: '/admin/category' },
                    {
                        label: 'Kategori Oluştur',
                        href: '/admin/category/create',
                        active: true,
                    },
                ]}
            />
            <h1 className="text-3xl font-bold mb-4">Kategori Oluştur</h1>
            <CreateCategoryForm />
        </main>
    )
}

export default CreateCategoryContainer;