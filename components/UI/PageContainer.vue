<template>
    <div class="bg-white min-h-[calc(100vh-var(--header-height))] dark:bg-gray-800">
        <header class="border-b border-gray-200 dark:border-gray-700">
            <slot name="header" />
        </header>
        <slot />

        <footer class="border-t py-6 px-4 flex justify-end items-center border-gray-200 dark:border-gray-700 w-full ">
            <slot name="footer" />
        </footer>
    </div>
</template>