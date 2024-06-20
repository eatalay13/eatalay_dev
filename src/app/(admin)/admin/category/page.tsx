import { getPostCategories } from "@/lib/actions/post-actions";

async function CategoriesPage() {
    const categories = await getPostCategories();
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesPage;