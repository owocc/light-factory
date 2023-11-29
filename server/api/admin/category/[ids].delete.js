import { deleteCategory } from "~/server/db/category"

export default defineEventHandler(async (event) => {

    const paramsIds = getRouterParam(event, 'ids')
    const ids = paramsIds && paramsIds.split(',').map(id => parseInt(id)) || []

    // 删除指定id的数据
    const {count} = await deleteCategory(ids)
    return {
        status: count >= 0,
        count
    }
})