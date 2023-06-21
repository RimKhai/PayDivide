<script setup>
import MembersList from "../../widgets/membersList/MembersList.vue";
import MembersInputForm from "../../widgets/membersInputForm/MembersInputForm.vue";
import NextButton from "../../shared/nextButton/NextButton.vue";
import BaseBlock from "../../shared/baseBlock/BaseBlock.vue"

import { useRoutesStore } from "../../stores/RoutesStore"

const routesStore = useRoutesStore()
</script>

<template>
    <BaseBlock>
        <MembersInputForm />
        <MembersList />
        <NextButton :routeName="routesStore.routeNames.AddProductsPage"/>
    </BaseBlock>
</template>

<style lang="scss" scoped>

</style>