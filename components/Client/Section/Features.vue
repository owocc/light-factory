<template>
  <section class="pt-32">
    <div
        class="px-6 grid gap-12 max-w-6xl mx-auto md:grid-cols-2 md:items-center"
    >
      <!--            <div class="relative justify-self-center md:order-1">-->
      <!--                <div-->
      <!--                        class="background-second-gradient w-52 h-80 border-[6px] border-transparent rounded-t-full lg:w-[400px] lg:h-[520px] lg:border-8"-->
      <!--                >-->
      <!--                    <img-->
      <!--                            src="/img/features-lamp.png"-->
      <!--                            alt=""-->
      <!--                            class="relative justify-self-center block w-40 mx-auto translate-y-[-6px] z-20 lg:w-[380px] lg:-translate-y-[8px]"-->
      <!--                    />-->
      <!--                    <h1-->
      <!--                            class="text-5xl text-white absolute right-4 bottom-14 font-medium text-opacity-30 tracking-[0.5rem] writing-vertical-lr"-->
      <!--                    >-->
      <!--                        LIGHT-->
      <!--                    </h1>-->
      <!--                </div>-->
      <!--                &lt;!&ndash; shadow &ndash;&gt;-->
      <!--                <div-->
      <!--                        class="bg-primary absolute bg-opacity-60 w-44 h-8 blur-md -bottom-3 -z-10 inset-x-0 mx-auto lg:w-[350px] lg:blur-lg lg:h-14"-->
      <!--                >-->
      <!--                    121-->
      <!--                </div>-->
      <!--            </div>-->
      <CommonCardLamp/>
      <!-- content -->
      <div class="grid gap-y-8 lg:-order-1">
        <!-- data -->
        <div class="text-center max-w-sm mx-auto">
          <!-- title -->
          <h2 class="text-2xl mb-4 lg:text-5xl">标题内容</h2>
          <!-- description -->
          <p>
            描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息
          </p>
        </div>
        <!-- info -->
        <div class="grid grid-cols-2 gap-6">
          <!-- infocard -->
          <div
              v-for="item in 4"
              class="bg-gradient-to-b from-gray-100 to-white py-8 px-6 text-center transition-shadow hover:shadow-lg group "
          >
            <h3
                class="text-lg font-medium group-hover:bg-third-gradient group-hover:text-transparent group-hover:bg-clip-text"
            >
              卡片信息 <br/>
              卡片
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-second-gradient {
  background: var(--second-gradient) padding-box,
  linear-gradient(90deg, #e69065 0%, #f4bfa4 100%) border-box;
}
</style>
