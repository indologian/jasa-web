<template>
  <!-- white backgroud -->
  <div v-show=" isVisible "
    class="bg-lightPrimary fixed z-40 bottom-9 w-[2rem] h-[2rem] cursor-pointer right-9 rounded-full"></div>

  <!-- icon scroll to top -->
  <Icon name="material-symbols:arrow-circle-up" v-show=" isVisible " @click=" scrollToTop "
    class="fixed z-50 bottom-5 w-[3.4rem] h-[3.4rem] cursor-pointer right-6 md:right-5 bg-secondary shadow hover:bg-darkPrimary " />
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
