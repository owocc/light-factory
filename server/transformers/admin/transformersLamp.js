export const transformerLampList = (lamp) => {
  return {
    id: lamp.id,
    name: lamp.name,
    price: lamp.price,
    stock: lamp.stock,
    sales: lamp.sales,
    desc: lamp.desc,
    createAt: lamp.createAt,
    updateAt: lamp.updateAt,
    categoryId: lamp.categoryId,
    categoryName: lamp.Category.name,
  };
};
