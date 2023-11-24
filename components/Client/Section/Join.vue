<template>
  <section class="pt-48 lg:pt-80">
    <!-- container -->
    <div class="px-6 max-6xl mx-auto grid">
      <!-- bg -->
      <div
          class="inline-grid justify-self-center bg-container px-6 md:px-12 pb-6 md:grid-cols-2 lg:pb-0 lg:grid-[450px 380px] lg:h-[442px] lg:gap-x-24"
      >
        <div
            class="relative justify-self-center z-20 -translate-y-1/4 lg:-translate-y-[8.5rem]"
        >
          <div
              class="background-second-gradient w-52 h-80 border-[6px] border-transparent rounded-t-full lg:w-[450px] lg:h-[580px] lg:border-8"
          >
            <img
                src="/img/join-lamp.png"
                alt=""
                class="relative justify-self-center block w-40 mx-auto translate-y-[-6px] z-20 lg:w-[380px] lg:-translate-y-[8px]"
            />
            <h1
                class="text-5xl text-white text-center font-medium text-opacity-30 tracking-[0.5rem] lg:text-7xl"
            >
              LIGHT
            </h1>
          </div>
          <!-- shadow -->
          <div
              class="bg-primary absolute bg-opacity-60 w-44 h-8 blur-md -bottom-3 -z-10 inset-x-0 mx-auto lg:w-[352px]"
          >
            121
          </div>
        </div>

        <!-- join content -->
        <div
            class="pt-10 grid items-start gap-y-8 grid-rows-[max-content] h-full lg:h-[442px] lg:justify-center lg:pt-24"
        >
          <div class="text-center md:text-left max-w-sm">
            <h2 class="text-2xl font-medium lg:text-6xl mb-4 lg:font-bold">
              标题
            </h2>
            <p>
              描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述
            </p>
          </div>
          <form
              class="grid gap-3 md:grid-cols-[1fr,max-content] md:gap-2 md:bg-base-body md:rounded-full"
          >
            <input
                type="email"
                placeholder="输入你的邮箱"
                class="w-full bg-base-body py-4 px-6 rounded-full"
            />
            <button
                class="bg-third-gradient rounded-full py-4 px-8 text-white text-center font-medium"
            >
              现在加入
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
