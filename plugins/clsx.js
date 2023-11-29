import clsx from "clsx"

export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.provide('clsx',clsx)
})