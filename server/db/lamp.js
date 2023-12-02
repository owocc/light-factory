import prisma from ".";
import {
  lampListMap,
  transformerLampList,
} from "../transformers/admin/transformersLamp";
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
// 优化所有代码
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

/**
 * 获取推荐灯具列表
 * @returns
 */
export const getRecommendList = async () => {
  const list = await prisma.lamp.findMany({
    where: {
      recommend: true,
    },
    include: {
      images: {
        orderBy: {
          order: "desc",
        },
      },
    },
  });
  const total = await prisma.lamp.count({
    where: {
      recommend: true,
    },
  });
  return {
    list: list.map((e) => useTransformers(e, lampListMap(e))),
    total,
  };
};

/**
 * 获取所有灯具
 * @returns
 */
export const getAll = async (query = {}) => {
  const lampQuery = {
    include: {
      images: {
        orderBy: {
          order: "desc",
        },
      },
    },
  };

  if (query.name) {
    lampQuery.where = { name: { contains: query.name } };
  }

  if (query.categoryId) {
    if (!lampQuery.where) {
      lampQuery.where = {};
    }

    lampQuery.where = {
      ...lampQuery.where,
      categoryId: query.categoryId,
    };
  }
  const list = await prisma.lamp.findMany(lampQuery);
  return {
    list: list.map((e) => useTransformers(e, lampListMap(e))),
    total: list.length,
  };
};

// 获取灯具详情
export const getLampDetail = async (id) => {
  return await prisma.lamp.findUnique({
    where: {
      id: id,
    },
    include: {
      Category: true,
    },
  });
};

// 更新灯具数据
export const updateLamp = async (data) => {
  const { id, name, price, stock, desc, categoryId, recommend, detail } = data;
  if (data.images && Array.isArray(data.images) && data.images.length > 0) {
    await prisma.image.updateMany({
      where: {
        lampId: id,
      },
      data: {
        lampId: null,
      },
    });
  }

  return await prisma.lamp.update({
    where: {
      id: data.id,
    },
    data: {
      id,
      name,
      price,
      stock,
      desc,
      categoryId,
      recommend,
      detail,
      images: {
        connect: data.images.map((image) => ({
          id: image.id,
        })),
      },
    },
  });
};

// 获取八个最新的数据
export const getLast = async () => {
  const list = await prisma.lamp.findMany({
    include: {
      images: {
        orderBy: {
          order: "desc",
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
    take: 8,
  });
  return {
    list: list.map((e) => useTransformers(e, lampListMap(e))),
    total: list.length,
  };
};
