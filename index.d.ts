import type { ClassValue } from 'clsx'
declare module '#app' {
    interface NuxtApp {
        $clsx(...inputs: ClassValue): string
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $clsx(...inputs: ClassValue): string
    }
}

export { }