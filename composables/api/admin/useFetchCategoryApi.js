export default function useFetchCategoryApi() {
  // -------- 表格-字段映射 -----------
  /**
   * 将后端返回的数据映射为 标题 - 字段名
   * @returns 表格映射信息
   */
  const useTableColumns = () => [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "分类名称",
    },
    {
      key: "parent.name",
      label: "父级分类",
    },
    {
      key: "createAt",
      label: "创建时间",
    },
    {
      key: "updateAt",
      label: "更新时间",
    },
    {
      key: "actions",
    },
  ];

  /**
   * 查询分类列表
   * @param query
   * @returns
   */
  const fetchCategoryList = (query) => {
    return $fetch("/api/admin/category/list", {
      method: "get",
      query,
    });
  };

  /**
   * 根据 id 列表删除分类信息
   * @param ids
   * @returns
   */
  const fetchDeleteCategory = async (ids) => {
    const { data, pending } = await useFetch(
      `/api/admin/category/${ids.join(",")}`,
      {
        method: "delete",
      }
    );

    return { data, pending };
  };

  /**
   * 添加分类信息
   * @param {*} data
   * @returns
   */
  const fetchAddCategory = (data) => {
    return $fetch("/api/admin/category", {
      method: "POST",
      body: data,
    });
  };

  /**
   * 查询分类类型列表
   * @returns
   */
  const fetchCategoryTypeList = () => {
    return $fetch("/api/admin/category/type/list", {
      method: "GET",
    });
  };

  /**
   * 修改分类信息
   * @param {*} data
   * @returns
   */
  const fetchUpdateCategory = (data) => {
    return $fetch("/api/admin/category", {
      method: "PATCH",
      body: data,
    });
  };

  /**
   * 通过 id 获取分类详情,包含灯具列表
   * @param {*} id
   * @param {*} param1
   * @returns
   */
  const fetchCategoryDetail = (id, { query }) => {
    console.log(query)
    return $fetch(`/api/admin/category/${id}`, {
      method: "GET",
      query,
    });
  };

  return {
    fetchCategoryList,
    fetchDeleteCategory,
    fetchAddCategory,
    fetchCategoryTypeList,
    fetchUpdateCategory,
    useTableColumns,
    fetchCategoryDetail,
  };
}
