import { addImage } from "~/server/db/image";

// 图片上传
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await addImage(body);
  
});
