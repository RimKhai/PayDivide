<script setup>
import { BContainer } from "bootstrap-vue-3";
import MembersList from "./widgets/membersList/MembersList.vue";
</script>

<template>
    <div class="main d-flex flex-column align-items-center justify-content-center">
        <MembersList />
    </div>
</template>

<style scoped lang="scss">
.main {
    padding: $ui-step*4;
    background-color: $base-color;
    border-radius: 20px;
}
</style>
