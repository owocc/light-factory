import { addImage } from "~/server/db/image";

// 图片上传
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const data = {
    url: `${config.qiniuDomain}/${body.url}`,
  };
  return await addImage(data);
});
