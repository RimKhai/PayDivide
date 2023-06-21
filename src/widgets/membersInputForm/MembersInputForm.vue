<script setup>
import { useMemberStore } from "../../stores/MembersStore";
import { ref } from "vue";

const name = ref("");

const memberStore = useMemberStore();
</script>

<template>
    <div class="d-flex justify-content-space-between w-100">
        <BFormInput v-model="name" class="input" placeholder="Enter Name" />
        <BButton
            class="button button__form"
            @click="memberStore.addNewMember(name)"
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