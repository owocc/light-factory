export default function useImageApi() {
  // 获取图片列表
  const fetchImageList = () =>
    $fetch("/api/admin/image/list", {
      method: "GET",
    });

  return {
    fetchImageList,
  };
}
