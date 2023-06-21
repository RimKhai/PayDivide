<script setup>
import BaseBlock from "../../shared/baseBlock/BaseBlock.vue";
import ProductsInputForm from "../../widgets/productsInputForm/ProductsInputForm.vue";
import ProductsList from "../../widgets/productsList/ProductsList.vue";
import NextButton from "../../shared/nextButton/NextButton.vue";
</script>

<template>
    <BaseBlock>
        <ProductsInputForm />
        <ProductsList />
        <NextButton :routeName="'AddMembersPage'" />
    </BaseBlock>
</template>

<style lang="scss" scoped></style>