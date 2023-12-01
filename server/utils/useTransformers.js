export const useTransformers = (data, transformation) => {
  const transformedData = {};

  for (const key in transformation) {
    const sourcePath = transformation[key].split(".");
    let value = data;

    for (const path of sourcePath) {
      if (value && value.hasOwnProperty(path)) {
        value = value[path];
      } else {
        value = undefined;
        break;
      }
    }

    transformedData[key] = value !== undefined ? value : null; // 如果属性不存在，设置为 null
  }

  return transformedData;
};
