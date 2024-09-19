<template>
  <NuxtLink
    :to="url"
    class="dark:text-lightPrimary hover:text-secondary dark:hover:text-primary focus:text-secondary dark:focus:text-primary capitalize"
    :class="{
      'text-secondary bg-lightSecondary px-2 rounded-lg dark:bg-transparent dark:text-primary':
        isActive,
    }"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  url: String,
  label: String,
});

const route = useRoute();

const isActive = computed(() => {
  return route.path === props.url;
});
</script>
