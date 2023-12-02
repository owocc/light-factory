import { useTransformers } from "~/server/utils/useTransformers";

export const transformerLampList = (data) =>
  useTransformers(data, {
    id: "id",
    name: "name",
    price: "price",
    stock: "stock",
    sales: "sales",
    desc: "desc",
    createAt: "createAt",
    updateAt: "updateAt",
    categoryId: "categoryId",
    categoryName: "Category.name",
    recommend: "recommend",
  });

export const lampListMap = (lamp) => ({
  id: "id",
  name: "name",
  price: "price",
  stock: "stock",
  sales: "sales",
  desc: "desc",
  createAt: "createAt",
  updateAt: "updateAt",
  categoryId: "categoryId",
  categoryName: "Category.name",
  recommend: "recommend",
  image: lamp.images && lamp.images.length > 0 ? "images.0.url" : "",
});
