import { getLast } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  return await getLast();
});
