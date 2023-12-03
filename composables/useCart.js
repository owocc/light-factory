export default function useCart() {
  const cartIds = useState("ids", () => []);

  const setCartIds = (val) => {
    cartIds.value = val;
    localStorage.setItem("cartIds", cartIds.value.join(","));
  };

  const getCartIds = () => {
    // 从本地存储中读取数据
    if (process.client) {
      const local = localStorage.getItem("cartIds");
      if (!local) {
        setCartIds([]);
      } else {
        setCartIds(local.split(",").map((e) => parseInt(e)));
      }
    }
    return cartIds;
  };
  const addCartId = (id) => {
    const ids = getCartIds();
    if (ids.value.includes(id)) {
      return false;
    }
    setCartIds([...ids.value, id]);
    return true;
  };

  const removeCartId = (id) => {
    const ids = getCartIds();
    setCartIds(ids.value.filter((e) => e !== id));
  };

  const clearCartIds = () => {
    setCartIds([]);
  };
  return {
    getCartIds,
    addCartId,
    removeCartId,
    clearCartIds,
  };
}
