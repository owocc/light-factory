import { getCategoryDetail } from "~/server/db/category";

export default defineEventHandler(async (event) => {
  const paramsId = getRouterParam(event, "ids");
  if (!paramsId) return;
  const id = parseInt(paramsId);
  const pagination = paginationHelper(event);
  const query = getQuery(event);
  const { list, total, category } = await getCategoryDetail(id, {
    pagination,
    query: {
      name: query.name,
    },
  });

  return {
    list,
    total,
    category,
  };
});
