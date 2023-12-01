import prisma from ".";
import { transformerLampList } from "../transformers/admin/transformersLamp";
/**
 * 获取灯具信息,分页
 * @param {*} param0
 */
export const getLampList = async ({ query, pagination }) => {
  const { skip, take } = pagination;

  const list = await prisma.lamp.findMany({
    where: {
      name: {
        contains: query?.name,
      },
    },
    include: {
      Category: {
        select: {
          name: true,
        },
      },
    },
    take,
    skip,
  });

  const total = await prisma.lamp.count({});
  return {
    total,
    list: list.map(transformerLampList),
  };
};

/**
 * 根据一个或者多个 Id 删除灯具
 * @param {*} ids
 * @returns
 */
export const deleteLamp = async (ids) => {
  return await prisma.lamp.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
};

// 新建灯具
export const addLamp = async (data) => {
  return await prisma.lamp.create({
    data: {
      name: data.name,
      price: data.price,
      stock: data.stock,
      desc: data.desc,
      detail: data.detail,
      images: {
        connect: data.images.map((image) => ({
          id: image.id,
        })),
      },
      categoryId: data.categoryId,
      recommend: data.recommend,
    },
    include: {
      images: true,
    },
  });
};
