<template>
  <!-- Hero -->
  <div
    class="flex items-center justify-center md:h-[calc(100vh-0.5rem)] md:max-h-[33rem] transition-all duration-400 ease-in-out" 
    :class="{
      'h-[calc(100vh-0.5rem)]': !isScrolled,
      'h-[33rem]': isScrolled,
    }"
  >
    <div class="max-w-[85rem] h-full mx-auto px-8 sm:px-6 lg:px-8 pt-24 pb-10">
      <!-- Title -->
      <div class="mt-5 max-w-xl text-center mx-auto">
        <h1
          class="block font-bold text-darkPrimary text-4xl md:text-5xl lg:text-6xl dark:text-lightPrimary"
        >
          Jasa Pembuatan Website Profesional
        </h1>
      </div>
      <!-- End Title -->

      <div class="mt-5 max-w-xl mx-auto text-justify">
        <p
          class="text-lg text-darkSecondary dark:text-lightPrimary leading-relaxed pt-2"
        >
          Jasa Pembuatan Website Terbaik & Profesional. Harga Termurah Mulai Rp
          300.000,-. Onlinekan Bisnis Anda Sekarang Juga. Jaminan Harga Termurah
          di Kelasnya. Gratis Hosting & Domain + Garansi Selamanya.
        </p>
      </div>

      <!-- Buttons -->
      <div class="mt-8 gap-3 flex justify-center">
        <a
          class="inline-flex justify-center items-center gap-x-3 text-center bg-primary text-darkPrimary hover:text-lightPrimary hover:bg-secondary text-lg font-bold rounded-full py-3 px-5"
          href="#"
        >
          Coba Sekarang
        </a>
      </div>
      <!-- End Buttons -->
    </div>
  </div>
  <!-- End Hero -->
</template>

<script lang="ts" setup>
const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
}

function checkInitialScroll() {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Check initial scroll position
  checkInitialScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
