<script setup>
const { getCartIds, removeCartId, clearCartIds } = useCart();
const { data, pending, refresh } = useLazyAsyncData(
  "cart",
  () => $fetch(`/api/lamp/${getCartIds().value.join(",")}`),
  {
    default: () => ({ list: [], total: 0 }),
    server: false,
  }
);

const total = computed(() => {
  return data.value.list
    .map((e) => parseInt(e.price))
    .reduce((a, b) => a + b, 0);
});

const toast = useToast();
const removeGood = async (id) => {
  removeCartId(id);
  toast.add({
    timeout: 1000,
    title: "移除成功",
  });
  await refresh();
};

const handlerSubmit = () => {
  clearCartIds();

  useRouter().push("/success");
};
</script>
<template>
  <ClientOnly>
    <UiEmpty
      :loading="pending"
      :visible="data.list.length > 0"
      msg="你还没有添加任何东西到购物车哦"
      icon="i-carbon-shopping-cart-clear"
    >
      <div class="pt-8 max-w-6xl mx-auto grid lg:grid-cols-12 px-4 gap-4">
        <div class="lg:col-span-8">
          <div class="mb-8 border-b py-4 dark:border-primary">
            <h1>购物车</h1>
          </div>
          <div class="grid gap-y-4">
            <div class="grid gap-4 grid-cols-3" v-for="item in data.list">
              <div
                class="w-full p-2 bg-gray-100 dark:bg-container-dark dark:border-primary border flex flex-col items-center justify-center"
              >
                <img class="h-64 w-full object-contain" :src="item.image" />
                <UButton variant="link" @click="removeGood(item.id)"
                  >移除此商品</UButton
                >
              </div>
              <div>
                <b class="text-black dark:text-white">{{ item.name }}</b>
                <p class="text-gray-400">{{ item.desc }}</p>
              </div>
              <!-- <div>
              <b class="text-black">购买数量</b>
              <UInput type="number"/>
            </div> -->
              <div>
                <b class="text-black dark:text-white">单价</b>
                <p>${{ item.price }}</p>
                <!-- <b class="text-black">小记</b>
              <p>$199</p> -->
              </div>
            </div>
          </div>
        </div>

        <div
          class="lg:col-span-4 p-4 dark:bg-container-dark bg-white w-full flex flex-col gap-4"
        >
          <h2 class="text-3xl pb-4">购物车信息</h2>
          <div>
            <b>商品数量: {{ data.list.length }}</b>
          </div>
          <div>
            <b>运费: $ 0.00</b>
          </div>
          <div>
            <b
              >商品总金额:
              <span class="text-2xl text-primary font-medium"
                >$ {{ total }}.00</span
              >
            </b>
          </div>
          <button
            class="w-full bg-primary p-4 text-white"
            @click="handlerSubmit"
          >
            结账
          </button>
        </div>
      </div>
    </UiEmpty>
  </ClientOnly>
</template>
