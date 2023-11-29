import { addCategory } from "~/server/db/category"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const data = await addCategory(body)
    return data
})