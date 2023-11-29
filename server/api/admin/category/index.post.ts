import { Prisma } from "@prisma/client"

export default defineEventHandler(async (event) => {
    const body = await readBody<Pick<Prisma.CategoryCreateManyInput, "name" | "parentId">>(event)

    const $prisma = event.context.prisma
    await $prisma.category.create({
        data: {
            name: body.name,
            parentId: body.parentId
        }
    })
    return {
        k: body.name,
    }
})