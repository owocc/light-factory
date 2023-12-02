import prisma from ".";
export const getCount = async () => {
  const total = await prisma.lamp.count();
  const salesData = await prisma.lamp.findMany({
    where: {
      sales: {
        not: 0,
      },
    },
    select: {
      sales: true,
    },
  });

  return {
    total,
    sales: salesData.map((e) => e.sales).reduce((old, val) => old + val, 0),
    custom: 199,
  };
};
