/**
 * 
 * @param {*} event 
 * @returns 从 event 身上读取分页信息,并自动计算出分页参数
 */
export const paginationHelper = (event) => {
    const query = getQuery(event)

    const limit = query?.limit ? parseInt(query.limit) : 10
    const page = query?.page ? parseInt(query.page) : 1

    return {
        skip: (page - 1) * limit,
        take: limit
    }
}