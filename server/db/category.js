import prisma from ".";

// 获取分类列表
const getCategoryList = async () => {

    const categoryList = await prisma.category.findMany({
        where: {
            parentId: {
                not: 0
            },
            name: {
                // contains: 
            }
        },
        include: {
            parent: {
                select: {
                    name: true
                }
            }
        },

    })
}