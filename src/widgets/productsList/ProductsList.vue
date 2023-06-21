<script setup>
import { useProductStore } from "../../stores/ProductsStore";
import ProductField from "../../entities/productField/ProductField.vue";

const productStore = useProductStore()
</script>

<template>
    <b-list-group class="list w-100">
        <b-list-group-item
            v-for="product in productStore.products"
            class="members-item rounded-2 p-2 d-flex justify-content-between align-items-center"
            :key="product.id"
        >
            <ProductField :name="product.name" :cost="product.cost" :id="product.id"></ProductField>
        </b-list-group-item>
    </b-list-group>
</template>

<style lang="scss" scoped>
.members-item {
    width: 100%;
    background-color: $additional-color;
    margin-top: $ui-step * 2;
}
.list {
    margin-top: $ui-step * 3;
    margin-bottom: $ui-step * 3;
}
</style>