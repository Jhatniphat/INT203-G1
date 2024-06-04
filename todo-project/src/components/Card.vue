<script setup>
const props = defineProps({
    size: {
        validator(value, props) {
            return ['sm', 'md', 'lg'].includes(value)
        }
    },
    variant: {
        validator(value, props) {
            return ['flat', 'tonal', 'outlined'].includes(value)
        }
    },
})
const sizeBinding = (() => {
    switch (props.size) {
        case 'sm': return 'w-44 h-36'
        case 'md': return 'w-60 h-52'
        case 'lg': return 'w-80 h-72'
    }
})
const variantBinding = (() => {
    switch (props.variant) {
        case 'outlined': return 'border border-slate-300'
        case 'tonal': return 'bg-slate-50'
        case 'flat': return 'shadow-md'
    }
})

const classBinding = (() => {
    return `${sizeBinding()} ${variantBinding()}`
})
</script>

<template>
    <div v-bind:class="classBinding()">
        <!-- <div class="text-xl text-nowrap">
            <slot name="title"></slot>
        </div>

        <div class="text-lg text-slate-700 text-nowrap">
            <slot name="subtitle"></slot>
        </div>
        <div class="text-wrap text-base">
            <slot name="Content"></slot>
        </div>
        <div class="text-red-500">
            <slot name="action"></slot>
        </div> -->

        <div class="font-bold" :class="size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
        ">
            <slot name="title">Untitled</slot>
            <!-- Untitled is a default fallback -->
        </div>
        <div class="font-semibold" :class="size === 'sm' ? 'text-md' : size === 'md' ? 'text-lg' : 'text-xl'">
            <slot name="subtitle">replace with your subtitle</slot>
        </div>
        <div class="pt-2" :class="size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : 'text-lg'">
            <slot name="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae
                maiores perspiciatis deserunt, sint ipsam hic magnam reprehenderit.
            </slot>
        </div>
        <div class="flex justify-end gap-3 pt-3">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<style scoped></style>