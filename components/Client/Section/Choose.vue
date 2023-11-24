<template>
  <section class="pt-32">
    <!-- container -->
    <div
        class="grid gap-12 px-6 max-w-6xl mx-auto md:grid-cols-2 md:items-center"
    >
      <!-- image -->
      <div class="relative justify-self-center">
        <!-- choose blob -->
        <div
            class="background-second-gradient border-[6px] border-transparent rounded-t-full w-52 h-80 lg:w-[400px] lg:h-[520px] lg:border-8"
        >
          <img
              src="/img/choose-lamp.png"
              alt=""
              class="relative block w-40 mx-auto translate-y-[-6px] z-20 lg:w-[280px] lg:-translate-y-[8px]"
          />
          <h1
              class="text-5xl tracking-[0.5rem] text-white text-opacity-30 font-medium left-4 bottom-12 absolute writing-vertical-lr rotate-180 lg:text-7xl"
          >
            LIGHT
          </h1>
        </div>
        <!-- shadow -->
        <div
            class="bg-primary absolute bg-opacity-60 w-44 h-8 blur-md -bottom-3 -z-10 inset-x-0 mx-auto lg:w-[350px] lg:blur-lg lg:h-14"
        ></div>
      </div>
      <!-- choose content -->
      <div class="grid gap-y-8">
        <!-- choose data -->
        <div class="text-center md:text-left ">
          <!-- title -->
          <h2 class="text-2xl mb-4 lg:mb-6 lg:text-5xl lg:font-bold">为什么选择我们</h2>
          <p>关于品牌介绍的文字,品牌的描述,品牌的优点</p>
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
                <i class="i-carbon-add transition-transform duration-300"/>
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
