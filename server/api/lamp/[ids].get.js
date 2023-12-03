import { getByIds } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const ids = getRouterParam(event, "ids");
  if (!ids) return { list: [], total: 0 };
  const parseIds = ids.split(",").map((e) => parseInt(e));
  if (parseIds.length <= 0) return { list: [], total: 0 };
  return await getByIds(parseIds);
});
