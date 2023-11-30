// 将分类数据转换为更扁平的方法

/**
 * 将分类详情中的灯具数据转换为更扁平的信息
 * @param {*} lamp
 * @returns
 */
export const transformerCategoryDetailLamp = (lamp) => {
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
    image: lamp.images.length > 0 ? lamp.images[0].url : "",
  };
};

const transformerCategoryList = () => {};
