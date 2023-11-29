import type { H3Event } from 'h3'
// 分页参数获取
export const paginationHelper = (event: H3Event) => {
    const query = getQuery<{
        limit?: string,
        page?: string
    }>(event)

    const limit = query?.limit ? parseInt(query.limit) : 10
    const page = query?.page ? parseInt(query.page) : 1


    return {
        skip: (page - 1) * limit,
        take: limit
    }
}