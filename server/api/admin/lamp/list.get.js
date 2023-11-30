import { getLampList } from "~/server/db/lamp";

// 获取所有灯具列表
export default defineEventHandler(async (event) => {
  // 获取分页参数
  const pagination = paginationHelper(event);
  const query = getQuery(event);

  const { list, total } = await getLampList({
    pagination,
    query,
  });

  return {
    list,
    total,
  };
});
