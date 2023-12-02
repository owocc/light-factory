import { getAll } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const selectQuery = {
    categoryId: (query.categoryId && parseInt(query.categoryId)) || null,
    name: query.name && query.name,
  };

  const { list, total } = await getAll(selectQuery);
  return {
    list,
    total,
  };
});
