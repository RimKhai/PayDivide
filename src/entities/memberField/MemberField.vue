<script setup>
const props = defineProps({
    name: String,
});
</script>

<template>
    <b-avatar class=""></b-avatar>
    <span class="">{{ name }}</span>
    <b-button class="rounded-circle">-</b-button>
</template>

<style lang="scss" scoped>

</style>