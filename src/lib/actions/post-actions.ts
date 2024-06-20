'use server';

import { PostCategory, PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPostCategoryShema } from "../shemas/post-shemas";
import { FormState } from "../types";

const prisma = new PrismaClient();

async function getPostCategories(): Promise<PostCategory[]> {
    return await prisma.postCategory.findMany();
}

export type createPostCategoryState = FormState<{
    name: string;
    order: string;
}>;

async function createPostCategory(prevState: any, formData: FormData): Promise<createPostCategoryState> {

    const result = await createPostCategoryShema.safeParseAsync({
        name: formData.get("name") as string,
        order: formData.get("order") as string,
    });

    if (!result.success) {
        return {
            ...prevState,
            message: "Formda hatalar var",
            errors: {
                name: result.error.flatten().fieldErrors.name,
                order: result.error.flatten().fieldErrors.order,
            }
        };
    }

    try {
        await prisma.postCategory.create({
            data: {
                name: result.data.name,
                order: parseInt(result.data.order),
            },
        });
    } catch (error) {
        return {
            ...prevState,
            message: "Kategori eklenirken bir hata oluştu",
            errors: {
                name: ["Kategori eklenirken bir hata oluştu"],
            }
        };
    }

    revalidatePath("/admin/category");
    redirect("/admin/category");
}

export { createPostCategory, getPostCategories };
