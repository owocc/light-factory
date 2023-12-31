import prisma from ".";
import { transformerCategoryDetailLamp } from "../transformers/admin/transformersCategory";

// 获取分类详情
export const getCategory = async (id) => {
  prisma.category.findUnique({
    where: {
      id,
    },
  });
};

// 获取分类列表
export const getCategoryList = async ({ query, pagination }) => {
  const { skip, take } = pagination;
  const list = await prisma.category.findMany({
    where: {
      parentId: {
        not: 0,
      },
      name: {
        contains: query?.name,
      },
    },
    include: {
      parent: {
        select: {
          name: true,
        },
      },
    },
    skip,
    take,
  });

  // 查询数据总条数
  const total = await prisma.category.count({
    where: {
      parentId: {
        not: 0,
      },
    },
  });

  return {
    list,
    total,
  };
};

// 根据 id 数组删除分类
export const deleteCategory = async (ids) => {
  // 查询这些分类信息中的 lamp 信息,将其迁移到 其他 分类中
  await prisma.lamp.updateMany({
    data: {
      categoryId: 1,
    },
    where: {
      categoryId: {
        in: ids,
      },
    },
  });

  // 删除传入的分类id
  return await prisma.category.deleteMany({
    where: {
      // 删除给定的 id 数组,如果给定的 id 为 0 则不会删除
      id: {
        in: ids,
        not: 0,
      },
      // 禁止删除 parentId 为 0 的基础分类
      parentId: {
        not: 0,
      },
    },
  });
};

// 添加分类数据
export const addCategory = async (data) => {
  const { name, parentId } = data;
  return await prisma.category.create({
    data: {
      name,
      parentId,
    },
  });
};

// 修改数据
export const updateCategory = async (data) => {
  const { name, parentId, id } = data;
  return await prisma.category.update({
    data: {
      name,
      parentId,
    },
    where: {
      id: id,
    },
  });
};

// 获取分类详情
export const getCategoryDetail = async (id, { pagination, query }) => {
  const { skip, take } = pagination;
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  let list = await prisma.lamp.findMany({
    where: {
      categoryId: id,
      name: {
        contains: query?.name,
      },
    },
    include: {
      images: {
        select: {
          url: true,
        },
        take: 1,
      },
    },
    take,
    skip,
  });

  const total = await prisma.lamp.count({
    where: {
      categoryId: id,
    },
  });

  return {
    category,
    list: list.map(transformerCategoryDetailLamp),
    total,
  };
};

// 获取分类类型列表
export const getCategoryTypeList = async () => {
  const list = await prisma.category.findMany({
    where: {
      parentId: 0,
    },
  });
  const total = await prisma.category.count({
    where: {
      parentId: 0,
    },
  });
  return {
    list,
    total,
  };
};

// 暂时是获取风格这个分类下的数据
export const getTreeList = async () => {
  const resultList = await prisma.category.findMany({
    where: {
      parentId: 3,
    },
    include: {
      parent: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    list: resultList,
    total: resultList.length,
  };
};
