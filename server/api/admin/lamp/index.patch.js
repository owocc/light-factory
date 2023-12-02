import { updateLamp } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await updateLamp(body);
});
