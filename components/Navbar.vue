<template>
  <nav
    :class="{
      'bg-transparent py-3 md:py-6': !isScrolled,
      'bg-primary dark:bg-darkPrimary py-2': isScrolled,
    }"
    class="w-full sticky top-0 z-50 transition-all duration-300"
  >
    <div class="container mx-auto relative w-full px-8">
      <div class="flex justify-between items-center">
        <div
          class="dark:text-lightPrimary font-bold text-3xl hover:text-secondary dark:hover:text-primary focus:text-secondary dark:focus:text-primary hover:cursor-pointer"
        >
          Portfolio
        </div>

        <!-- Hamburger menu for small screens -->
        <div class="md:hidden flex">
          <DarkModeToggler class="pe-4" />
          <Icon
            name="material-symbols:notes"
            @click="toggle"
            class="text-2xl my-3 md:my-0 font-semibold transition-all duration-200 bg-secondary rounded-md"
          />
        </div>

        <!-- Navigation links for large screens -->
        <div class="hidden md:flex md:space-x-4">
          <HomePartialsNavLink url="/" label="home" />
          <HomePartialsNavLink url="/project" label="project" />
          <HomePartialsNavLink url="/about" label="about" />
          <HomePartialsNavLink url="/contact" label="contact" />
          <DarkModeToggler />
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="mobileMenu"
        class="absolute right-0 top-14 md:hidden pb-5 flex flex-col space-y-5 font-bold bg-lightSecondary w-screen text-darkPrimary dark:text-lightPrimary pe-8 pt-3 text-end"
        :class="{
          'dark:bg-darkSecondary': !isScrolled,
          'dark:bg-darkPrimary py-2': isScrolled,
        }"
      >
        <HomePartialsNavLink url="/" label="home" />
        <HomePartialsNavLink url="/project" label="project" />
        <HomePartialsNavLink url="/about" label="about" />
        <HomePartialsNavLink url="/contact" label="contact" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const mobileMenu = ref(false);
const isScrolled = ref(false);

function toggle() {
  mobileMenu.value = !mobileMenu.value;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
