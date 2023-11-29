import { paginationHelper } from "~/server/utils/paginationHelper"

// 获取所有分类列表,不会查询出一级分类
export default defineEventHandler(async (event) => {

    const $prisma = event.context.prisma

    // 获取分页参数
    const pagination = paginationHelper(event)
    const query = getQuery<{ name?: string }>(event)
    // 查询分类列表
    const categoryList = await $prisma.category.findMany({
        where: {
            parentId: {
                not: 0
            },
            name: {
                contains: query?.name
            }
        },
        include: {
            parent: {
                select: {
                    name: true
                }
            }
        },
        ...pagination
    })


    // 查询数据总条数
    const total = await $prisma.category.count({
        where: {
            parentId: {
                not: 0
            }
        }
    })

    return {
        list: categoryList,
        total
    }
})