<script setup>
import { useMemberStore } from "../../stores/MembersStore";

const memberStore = useMemberStore();
const props = defineProps({
    name: String,
    id: Number,
});
</script>

<template>
    <b-avatar class=""></b-avatar>
    <span class="">{{ name }}</span>
    <b-button class="rounded-1" @click="memberStore.deleteMember(id)"
        >-</b-button
    >
</template>

<style lang="scss" scoped>
</style>