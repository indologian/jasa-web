<template>
    <div>
        <div class="flex items-center justify-center w-20 h-20 mx-auto bg-variant rounded-full" :class=" bgClass ">
            <Icon :name=" iconName " class="text-lightPrimary w-9 h-9" />
        </div>
        <h3 class="mt-8 text-lg font-bold">{{ title }}</h3>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    iconName: string;
    bgClass: string;
}>();
</script>
