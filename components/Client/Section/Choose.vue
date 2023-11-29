<template>
  <section class="pt-32" id="choose">
    <div
        class="grid gap-12 px-6 max-w-6xl mx-auto md:grid-cols-2 md:items-center"
    >
      <CommonCardLamp lamp-image="/img/industrial-lamp.png" img-class="lg:!w-[280px]"/>
      <div class="grid gap-y-8">
        <div class="text-center md:text-left ">
          <h2 class="text-2xl mb-4 lg:mb-6 lg:text-5xl lg:font-bold">为什么选择我们</h2>
          <p class="text-gray-400">关于品牌介绍的文字,品牌的描述,品牌的优点</p>
        </div>
        <!-- faq -->
        <div class="grid gap-y-8">
          <!-- item -->
          <div v-for="item in 4">
            <!-- head -->
            <div class="flex items-center gap-x-3 cursor-pointer">
              <!-- icon -->
              <div
                  class="items-center inline-flex p-1 bg-third-gradient rounded-lg text-white text-lg shadow-sm transition-all shadow-primary-alt"
              >
                <Icon name="i-carbon-add" class="transition-transform duration-300"/>
              </div>
              <!-- faq title -->
              <h3 class="font-normal">FAQ 标题文字一大长串</h3>
            </div>
            <!-- faqContent TODO:这里需要做展开逻辑-->
            <div class="h-0 overflow-hidden transition-all ease duration-300">
              <p class="pt-2 pl-10 pr-4 break-all">
                descriptiondescriptiondescriptiondescription
                descriptiodescription description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
