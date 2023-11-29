import type { Prisma } from "@prisma/client"

export default function useFetchCategoryApi() {

    /**
     * 
     * @param query 
     * @returns 查询分类列表
     */
    const fetchCategoryList = (query: {
        name?: string,
        limit?: number,
        page?: number
    }) => {
        return $fetch('/api/admin/category/list', {
            method: 'get',
            query
        })
    }

    /**
     * 
     * @param ids 
     * @returns 根据 id 列表删除分类信息
     */
    const fetchDeleteCategory = async (ids: number[] | string[]) => {
        const { data, pending } = await useFetch(`/api/admin/category/${ids.join(',')}`, {
            method: "delete"
        })

        return { data, pending }
    }

    const fetchAddCategory = async (data: Pick<Prisma.CategoryCreateManyInput, "name" | "parentId">) => {
        await $fetch('/api/admin/category', {
            method: 'POST',
            body: data
        })
    }

    return {
        fetchCategoryList,
        fetchDeleteCategory,
        fetchAddCategory
    }
}
