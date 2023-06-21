<script setup>
import { useProductStore } from "../../stores/ProductsStore";
import { ref } from "vue";

const name = ref("");
const cost = ref();

const productStore = useProductStore();
</script>
<template>
    <div class="d-flex justify-content-space-between w-100">
        <BFormInput v-model="name" class="input" placeholder="Enter Name" />
        <BFormInput v-model="cost" class="input ms-2" placeholder="Enter Cost" />
        <BButton
            class="button button__form"
            @click="productStore.addNewProduct(name, cost)"
            >+</BButton
        >
    </div>
</template>

<style lang="scss" scoped>
.form-control:focus {
    @include ui-border($additional-color);
}
.button {
    background-color: $button-color;
}

.button__form {
    margin-left: $ui-step * 2;
}
</style>