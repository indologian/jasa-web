<template>
  <NuxtLink :to=" url "
    class="dark:text-lightPrimary hover:text-secondary dark:hover:text-primary focus:text-secondary dark:focus:text-primary capitalize"
    :class=" {
      'text-secondary rounded-lg dark:text-primary':
        isActive,
    } ">

    <div class="flex justify-end items-center">
      {{ label }}
      <Icon :name=" iconName ? iconName : '' " class="text-2xl ms-3 md:my-0 font-semibold rounded-md md:hidden" :class=" {
        'text-secondary rounded-lg dark:text-primary':
          isActive,
      } " />
    </div>

  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  url: String,
  label: String,
  iconName: String,
});

const route = useRoute();

const isActive = computed(() => {
  return route.path === props.url;
});
</script>
