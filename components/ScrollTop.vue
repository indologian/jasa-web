<template>
  <Icon
    name="material-symbols:arrow-circle-up"
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-6 md:bottom-7 text-5xl cursor-pointer right-6 md:right-5 bg-secondary shadow hover:bg-darkPrimary dark:hover:bg-lightPrimary transition"
  >
    ↑ Top
  </Icon>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
