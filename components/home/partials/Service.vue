<script setup lang="ts">
defineProps({
  label: String,
});
</script>

<template>
  <div
    class="relative rounded-xl bg-lightPrimary dark:bg-darkPrimary px-6 mt-6 text-center shadow-xl flex flex-col justify-center min-h-[150px]"
  >
    <div
      class="absolute inset-[-25px] mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-md shadow-primary/50"
    >
      <Icon
        name="material-symbols:check-circle"
        class="w-6 h-6 dark:text-darkPrimary"
      />
    </div>
    <h3 class="text-darken text-sm font-medium">
      {{ label }}
    </h3>
  </div>
</template>
