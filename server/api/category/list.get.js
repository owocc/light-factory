import { getTreeList } from "~/server/db/category";

// 获取所有分类列表,根据三种不同的主分类组成树结构
export default defineEventHandler(async (event) => {
  return await getTreeList();
});
