<script setup>
const nuxtApp = useNuxtApp()
const isLoading = ref(false)
nuxtApp.hook('page:start', () => {
    isLoading.value = true
})
nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
        isLoading.value = false
    }, 500)
})
</script>
<template>
    <Teleport to="body" v-if="isLoading">
        <div
            class="h-screen w-screen flex justify-center items-center bg-gray-100 dark:bg-base-dark fixed z-[999] top-0 left-0">
            <div class="flex flex-col gap-y-4 items-center justify-center  relative">
                <div class="h-32 w-32 blur-2xl  animate-ping bg-primary/80 dark:bg-primary/50 absolute  -z-10"></div>
                <!-- <img src="/img/home-lamp.png" class="w-48"/> -->
                <div class="animate-bounce">
                    <CommonLogo class="!text-5xl " dark />
                </div>
                <UProgress animation="carousel" size="xs">

                </UProgress>
            </div>
        </div>
    </Teleport>
</template>