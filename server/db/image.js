import prisma from ".";

export const addImage = async (data) => {
  return await prisma.image.create({
    data: {
      url: data.url,
      lampId: data?.lampId,
      desc: data?.desc,
    },
  });
};
