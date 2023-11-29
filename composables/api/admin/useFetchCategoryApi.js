export default function useFetchCategoryApi() {

    


    /**
     * 
     * @param query 
     * @returns 查询分类列表
     */
    const fetchCategoryList = (query) => {
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
    const fetchDeleteCategory = async (ids) => {
        const { data, pending } = await useFetch(`/api/admin/category/${ids.join(',')}`, {
            method: "delete"
        })

        return { data, pending }
    }

    const fetchAddCategory =  (data) => {
        return $fetch('/api/admin/category', {
            method: 'POST',
            body: data
        })
    }

    const fetchCategoryTypeList = ()=>{
        return $fetch('/api/admin/category/type/list',{
            method:'GET'
        })
    }

    const fetchUpdateCategory = (data)=>{
        return $fetch("/api/admin/category",{
            method:"PATCH",
            body:data
        })
    }

    return {
        fetchCategoryList,
        fetchDeleteCategory,
        fetchAddCategory,
        fetchCategoryTypeList,
        fetchUpdateCategory
    }
}
