<script setup>
import MemberField from "../../entities/memberField/MemberField.vue";
import { useMemberStore } from "../../stores/MembersStore";
const memberStore = useMemberStore();
</script>

<template>
    <b-list-group class="list">
        <b-list-group-item
            v-for="homie in memberStore.homies"
            class="members-item rounded-2 p-2 d-flex justify-content-between align-items-center"
            :key="homie.id"
        >
            <MemberField :name="homie.name" :id="homie.id"></MemberField>
        </b-list-group-item>
    </b-list-group>
</template>

<style lang="scss" scoped>
.members-item {
    width: $ui-step * 100;
    background-color: $additional-color;
    margin-top: $ui-step * 2;
}
.list {
    margin-top: $ui-step * 3;
    margin-bottom: $ui-step * 3;
}
</style>