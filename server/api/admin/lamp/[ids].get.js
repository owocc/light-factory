import { getLampDetail } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const paramsId = getRouterParam(event, "ids");
  if (!paramsId) return;
  const id = parseInt(paramsId);
  return await getLampDetail(id);
});
