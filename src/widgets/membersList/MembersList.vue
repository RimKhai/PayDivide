<script setup>
import MemberField from "../../entities/memberField/MemberField.vue";
import { useMemberStore } from "../../stores/MembersStore";
const memberStore = useMemberStore();
</script>

<template>
    <b-list-group>
        <b-list-group-item
            v-for="homie in memberStore.homies"
            class="members-item rounded-4 p-2 d-flex justify-content-between align-items-center"
            :key="homie.cost"
        >
            <MemberField :name="homie.name"></MemberField>
        </b-list-group-item>
    </b-list-group>
</template>

<style lang="scss" scoped>
.members-item {
    width: $ui-step*100;
    background-color: $additional-color;
    margin-top: $ui-step;
    
}
</style>