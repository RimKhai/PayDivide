<script setup>
</script>

<template>
    <div
        class="main d-flex flex-column align-items-center justify-content-center">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding: $ui-step * 4;
    background-color: $base-color;
    border-radius: 15px;
}
</style>

