export default function useImageApi() {
  // 获取图片列表
  const fetchImageList = (lampId) => {
    const query = lampId ? { lampId } : {};
    return $fetch("/api/admin/image/list", {
      method: "GET",
      query,
    });
  };

  return {
    fetchImageList,
  };
}
