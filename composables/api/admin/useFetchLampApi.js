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

  const fetchLampList = (query) =>
    $fetch("/api/admin/lamp/list", {
      method: "GET",
      query,
    });
  return {
    useTableColumns,
    fetchLampList,
  };
}
