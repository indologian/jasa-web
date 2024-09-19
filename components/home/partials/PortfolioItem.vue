<template>
  <div
    class="duration-700 ease-in-out absolute inset-0"
    :class="{ hidden: !isActive, block: isActive }"
  >
    <div class="absolute inset-0 flex flex-col">
      <div
        class="flex-grow bg-cover bg-center"
        :style="{ backgroundImage: `url('${imageUrl}')` }"
      ></div>
      <div
        class="bg-white dark:bg-darkPrimary md:py-5 py-4 flex justify-center"
      >
        <NuxtLink
          :to="buttonUrl"
          title=""
          class="px-4 py-2 text-sm md:text-xl font-semibold text-darkPrimary transition-all duration-200 bg-primary hover:bg-secondary hover:text-lightSecondary dark:bg-primary rounded-md dark:hover:bg-lightSecondary dark:hover:text-darkPrimary focus:bg-primary"
          role="button"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  isActive: boolean;
}>();
</script>
