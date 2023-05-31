<script setup>
    const props = defineProps({
        name: String
    })
</script>

<template>
    <b-list-group-item class="members-item border rounded-pill p-2 d-flex justify-content-between align-items-center">
        <b-avatar class=""></b-avatar>
        <span class="">{{ name }}</span>
        <b-button class="rounded-circle">-</b-button>
    </b-list-group-item>
</template>

<style lang="scss" scoped>
.members-item {
    width: 500px;
    background-color: rgb(207, 204, 204);
}
</style>