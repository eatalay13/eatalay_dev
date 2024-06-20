import { PostCategory, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTotalPagePostCategories(query: string): Promise<number> {
    const totalCount = await prisma.postCategory.count({
        where: {
            name: {
                contains: query
            }
        }
    });

    return Math.ceil(totalCount / 10);
}

async function getPostCategories(query: string, currentPage: number): Promise<PostCategory[]> {
    return await prisma.postCategory.findMany({
        where: {
            name: {
                contains: query
            }
        },
        skip: (currentPage - 1) * 10,
        take: 10
    });
}

export { getPostCategories, getTotalPagePostCategories };

