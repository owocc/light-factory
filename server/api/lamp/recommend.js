import { getRecommendList } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const { list,total } = await getRecommendList();
  return {
    list,
    total,
  };
});
