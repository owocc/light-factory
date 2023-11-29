export default defineEventHandler(async (event) => {
    const paramsIds = getRouterParam(event, 'ids')
    const ids: number[] = paramsIds && paramsIds.split(',').map(id => parseInt(id)) || []
    // 删除指定id的数据
    const $prisma = event.context.prisma

    const { count } = await $prisma.category.deleteMany({
        where: {
            // 删除给定的 id 数组,如果给定的 id 为 0 则不会删除
            id: {
                in: ids,
                not: 0
            },
            // 禁止删除 parentId 为 0 的基础分类
            parentId: {
                not: 0
            }
        }
    })

    return {
        status: count >= 0,
        count
    }
})