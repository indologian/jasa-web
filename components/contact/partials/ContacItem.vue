<script lang="ts" setup>
defineProps<{
    title: string;
    iconName: string;
    content: string;
}>();

</script>
<template>
    <div class="flex items-center">
        <Icon :name=" iconName " class="w-12 h-12 text-secondary dark:text-primary mr-6 my-4 " />
        <div class="w-full text-justify">
            <h4 class="mb-1 text-xl font-semibold text-dark dark:text-lightPrimary">
                {{ title }}
            </h4>
            <p class="text-base text-body-color dark:text-lightPrimary text-darkSecondary  md:text-sm">
                {{ content }}
            </p>
        </div>
    </div>
</template>