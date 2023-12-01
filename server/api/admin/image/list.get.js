import { getImageList } from "~/server/db/image";

// 获取数据库中图片
export default defineEventHandler(async (event) => {
  const { list, total } = await getImageList();
  return {
    list,
    total,
  };
});
