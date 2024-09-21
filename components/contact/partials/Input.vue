<script lang="ts" setup>
defineProps<{
    placeholder: string;
    name: string;
}>();

</script>

<template>
    <div class="mb-5">
        <input type="text" :placeholder=" placeholder " :name=" name "
            class="border-stroke dark:border-lightPrimary dark:text-lightPrimary dark:bg-lightSecondary text-secondary focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
    </div>
</template>