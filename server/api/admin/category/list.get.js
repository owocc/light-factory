import { getCategoryList } from "~/server/db/category"

// 获取所有分类列表,不会查询出一级分类
export default defineEventHandler(async (event) => {

    // 获取分页参数
    const pagination = paginationHelper(event)
    const query = getQuery(event)

    const { list,total } = await getCategoryList({
        query,
        pagination
    })
    
    return {
        list,
        total
    }
})