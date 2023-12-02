import { getAll } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const { list, total } = await getAll();
  return {
    list,
    total,
  };
});
