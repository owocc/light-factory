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
