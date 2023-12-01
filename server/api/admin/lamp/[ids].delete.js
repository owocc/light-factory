import { deleteLamp } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const paramsIds = getRouterParam(event, "ids");
  const ids =
    (paramsIds && paramsIds.split(",").map((id) => parseInt(id))) || [];

  const { count } = await deleteLamp(ids);
  return {
    status: count >= 0,
    count,
  };
});
