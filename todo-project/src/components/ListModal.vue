<script setup>
const props = defineProps({
    items : { type : Array , required : true}
})
console.log(props.items)
</script>
 
<template>
<div>
    <div class="text-3xl font-semibold tracking-wide">
        <slot name="header"></slot>
    </div>
    <!-- <div v-for="(item , index) in items" :key="index">{{ item }}
        <div v-for="i in item">{{ i }}</div>
    </div> -->
    <slot v-for="(item , index) in items" :key="index" :item="item"> {{ item }}</slot>
</div>
</template>
 
<style scoped>

</style>