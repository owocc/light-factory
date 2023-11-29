import { getCategoryTypeList } from "~/server/db/category"

export default defineEventHandler(async (event) => {
    return await getCategoryTypeList()
})