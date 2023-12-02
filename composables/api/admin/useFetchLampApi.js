export default function useFetchLampApi() {
  const useTableColumns = () => [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "灯具名称",
    },
    {
      key: "categoryName",
      label: "分类名称",
    },
    {
      key: "price",
      label: "价格",
    },
    {
      key: "stock",
      label: "库存",
    },
    {
      key: "sales",
      label: "销量",
    },
    {
      key: "actions",
    },
  ];

  // 获取灯具列表
  const fetchLampList = (query) =>
    $fetch("/api/admin/lamp/list", {
      method: "GET",
      query,
    });

  // 删除灯具
  const fetchLampDelete = (ids) =>
    $fetch(`/api/admin/lamp/${ids.join(",")}`, {
      method: "DELETE",
    });

  // 添加灯具
  const fetchCreateLamp = (data) =>
    $fetch("/api/admin/lamp", {
      method: "POST",
      body: data,
    });

  // 获取灯具详情
  const fetchLampDetail = (id) => {
    return $fetch(`/api/admin/lamp/${id}`, {
      method: "GET",
    });
  };

  const fetchLampUpdate = (data) => {
    return $fetch("/api/admin/lamp", {
      method: "PATCH",
      body: data,
    });
  };
  return {
    useTableColumns,
    fetchLampList,
    fetchLampDelete,
    fetchCreateLamp,
    fetchLampDetail,
    fetchLampUpdate,
  };
}
