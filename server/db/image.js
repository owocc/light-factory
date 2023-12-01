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
export const getImageList = async () => {
  const list = await prisma.image.findMany({
    where: {
      lampId: null,
    },
    orderBy: {
      createAt: "desc",
    },
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
