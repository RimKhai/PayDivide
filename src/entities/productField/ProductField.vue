<script setup>
import { useProductStore } from "../../stores/ProductsStore";

const productStore = useProductStore()
const props = defineProps({
    name: String,
    id: Number,
    cost: Number
});
</script>

<template>
    <span class="product_name">{{ name }}</span>
    <span class="">{{ cost }}</span>
    <b-button class="rounded-1" @click="productStore.deleteProduct(id)"
        >-</b-button
    >
</template>

<style lang="scss" scoped>
.product_name {
    width: min(100px, 33%);
}
</style>