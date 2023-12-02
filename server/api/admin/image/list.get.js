import { getImageList } from "~/server/db/image";

// 获取数据库中图片
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const lampId = query?.lampId && parseInt(query.lampId);
  const { list, total } = await getImageList({
    query: {
      lampId,
    },
  });

  return {
    list,
    total,
  };
});
