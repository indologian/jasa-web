<template>
  <nav :class=" {
    'bg-transparent py-3 md:py-6': !isScrolled,
    'bg-primary dark:bg-darkPrimary py-2': isScrolled,
  } " class="w-full sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto relative w-full lg:max-w-6xl px-8">
      <div class="flex justify-between items-center">
        <NuxtLink to="/"
          class="dark:text-lightPrimary font-bold text-3xl hover:text-secondary dark:hover:text-primary focus:text-secondary dark:focus:text-primary hover:cursor-pointer">
          Portfolio
        </NuxtLink>

        <!-- Hamburger menu for small screens -->
        <div class="md:hidden flex">
          <DarkModeToggler />
          <Icon v-show=" !mobileMenu " name="material-symbols:notes" @click=" toggleMobileMenu "
            class="text-2xl my-3 ms-3 md:my-0 font-semibold bg-secondary rounded-md" />
          <Icon v-show=" mobileMenu " name="material-symbols:close-small-rounded" @click=" toggleMobileMenu "
            class="text-2xl my-3 ms-3 md:my-0 font-semibold bg-secondary rounded-md" />
        </div>

        <!-- Navigation links for large screens -->
        <div class="hidden md:flex md:space-x-4">
          <HomePartialsNavLink url="/" label="home" />
          <HomePartialsNavLink url="/portfolio" label="portfolio" />
          <HomePartialsNavLink url="/contact" label="contact" />
          <DarkModeToggler />
        </div>
      </div>

      <!-- Mobile menu -->
      <transition enter-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-screen opacity-100" leave-active-class="transition-all duration-300 ease-in-out"
        leave-from-class="max-h-screen opacity-100" leave-to-class="max-h-0 opacity-0">
        <div v-if="mobileMenu"
          class="absolute right-0 top-14 md:hidden pb-5 flex flex-col space-y-5 font-bold bg-lightSecondary w-screen text-darkPrimary dark:text-lightPrimary pe-8 pt-3 text-end overflow-hidden">
          <HomePartialsNavLink @click=" toggleMobileMenu " url="/" label="home"
            iconName="material-symbols:android-google-home" />
          <HomePartialsNavLink @click=" toggleMobileMenu " url="/portfolio" label="portfolio"
            iconName="material-symbols:slideshow-outline" />
          <HomePartialsNavLink @click=" toggleMobileMenu " url="/contact" label="contact" iconName="ic:baseline-call" />
        </div>
      </transition>

    </div>
  </nav>
</template>

<script setup>
const mobileMenu = ref(false);
const isScrolled = ref(false);

function toggleMobileMenu() {
  mobileMenu.value = !mobileMenu.value;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
}

function checkInitialScroll() {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  checkInitialScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
