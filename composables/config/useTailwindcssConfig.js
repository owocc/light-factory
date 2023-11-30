export default function useTailwindcssConfig() {
  // 边框样式
  const tailwindBorderStyle = "dark:border-gray-700 border-gray-200";

  // 黏在左上,navbar下面
  const tailwindStickyLeftTopStyle =
    "sticky left-0 top-[calc(var(--header-height))] z-40 max-h-[calc(100vh-var(--header-height))]";

  const tailwindMinHeight = "min-h-[calc(100vh-var(--header-height))]";

  const tailwindBGStyle = "bg-white dark:bg-gray-800";
  return {
    tailwindBorderStyle,
    tailwindStickyLeftTopStyle,
    tailwindBGStyle,
    tailwindMinHeight,
  };
}
