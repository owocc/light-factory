import { addLamp } from "~/server/db/lamp";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await addLamp(body);
});
