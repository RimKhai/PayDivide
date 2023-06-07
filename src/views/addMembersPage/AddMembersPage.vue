<script setup>
import MembersList from "../../widgets/membersList/MembersList.vue";
import { useMemberStore } from "../../stores/MembersStore";
import { ref } from "vue";

const name = ref("");

const memberStore = useMemberStore();
</script>

<template>
    <div
        class="main d-flex flex-column align-items-center justify-content-center"
    >
        <div class="form d-flex justify-content-space-between w-100">
            <BFormInput v-model="name" class="input" placeholder="Enter Name" />
            <BButton
                class="button button__form"
                @click="memberStore.addNewMember(name)"
                >+</BButton
            >
        </div>
        <div class="list">
            <MembersList />
        </div>
        <div class="next w-100">
            <RouterLink to="/products">
                <BButton class="w-100 button button__next">Дальше!</BButton>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding: $ui-step * 4;
    background-color: $base-color;
    border-radius: 15px;
}
.form-control:focus {
    @include ui-border($additional-color);
}
.list {
    margin-top: $ui-step * 3;
    margin-bottom: $ui-step * 3;
}

.button {
    background-color: $button-color;
}

.button__form {
    margin-left: $ui-step * 2;
}
.button__next {
    margin-top: $ui-step * 2;
}
</style>