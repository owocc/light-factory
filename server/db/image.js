import prisma from ".";

// 添加图片
export const addImage = async (data) => {
  return await prisma.image.create({
    data: {
      url: data.url,
      lampId: data?.lampId,
      desc: data?.desc,
    },
  });
};

// 获取所有未分配的图片
export const getImageList = async ({ query }) => {
  const list = await prisma.image.findMany({
    where: {
      OR: [
        {
          lampId: null,
        },
        {
          lampId: query?.lampId,
        },
      ],
    },
    orderBy: [
      {
        lampId: "desc",
      },
      {
        createAt: "desc",
      },
    ],
  });
  const total = await prisma.image.count({
    where: {
      lampId: null,
    },
  });

  return {
    list,
    total,
  };
};
