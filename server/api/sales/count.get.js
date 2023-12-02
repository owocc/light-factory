import { getCount } from "~/server/db/sales";

export default defineEventHandler(async (event) => {
  const { custom, total, sales } = await getCount();
  return [
    {
      text: "灯具数量",
      afterText: "种",
      value: total,
    },
    {
      text: "灯具销量",
      afterText: "件",
      value: sales,
    },
    {
      text: "定制需求",
      afterText: "起",
      value: custom,
    },
  ];
});
