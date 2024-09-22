<template>
  <nav :class=" {
    'bg-transparent py-3 md:py-6 transition-colors': !isScrolled,
    'bg-primary dark:bg-darkPrimary py-2': isScrolled,
  } " class="w-full sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto relative w-full lg:max-w-6xl px-8">
      <div class="flex justify-between items-center">
        <NuxtLink to="/"
          class="dark:text-lightPrimary font-bold text-3xl hover:text-secondary dark:hover:text-primary focus:text-secondary dark:focus:text-primary hover:cursor-pointer">
          Portfolio
        </NuxtLink>

        <!-- Hamburger menu for small screens -->
        <div class="md:hidden flex items-center">
          <DarkModeToggler />
          <button ref="hamburgerRef" class="relative w-7 h-10 lg:hidden" @click=" toggleMobileMenu ">
            <div ref="lineRef" class="inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300"></div>
            <div ref="line2Ref"
              class="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300">
            </div>
          </button>
        </div>

        <!-- Navigation links for large screens -->
        <div class="hidden md:flex md:space-x-4">
          <PartialsNavLink url="/" label="home" />
          <PartialsNavLink url="/portfolio" label="portfolio" />
          <PartialsNavLink url="/contact" label="contact" />
          <DarkModeToggler />
        </div>
      </div>

      <!-- Mobile menu -->
      <transition enter-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-screen opacity-100" leave-active-class="transition-all duration-300 ease-in-out"
        leave-from-class="max-h-screen opacity-100" leave-to-class="max-h-0 opacity-0">
        <div v-if="mobileMenu"
          class="absolute right-0 top-14 md:hidden pb-5 flex flex-col space-y-5 font-bold w-screen text-darkPrimary dark:text-lightPrimary pe-8 pt-3 text-end overflow-hidden"
          :class=" {
            'bg-lightSecondary dark:bg-darkSecondary py-3 md:py-6 transition-colors': !isScrolled,
            'bg-primary dark:bg-darkPrimary py-2': isScrolled,
          } ">
          <PartialsNavLink @click=" toggleMobileMenu " url="/" label="home"
            iconName="material-symbols:android-google-home" />
          <PartialsNavLink @click=" toggleMobileMenu " url="/portfolio" label="portfolio"
            iconName="material-symbols:slideshow-outline" />
          <PartialsNavLink @click=" toggleMobileMenu " url="/contact" label="contact" iconName="ic:baseline-call" />
        </div>
      </transition>

    </div>
  </nav>
</template>

<script setup lang="ts">

const mobileMenu = ref(false);
const isScrolled = ref(false);
const hamburgerRef = ref<HTMLButtonElement | null>(null)
const lineRef = ref<HTMLDivElement | null>(null)
const line2Ref = ref<HTMLDivElement | null>(null)


function toggleMobileMenu() {
  if (lineRef.value && line2Ref.value) {
    lineRef.value.classList.toggle('rotate-45')
    lineRef.value.classList.toggle('absolute')
    line2Ref.value.classList.toggle('-rotate-45')
    line2Ref.value.classList.toggle('absolute')
    line2Ref.value.classList.toggle('mt-1.5')
    mobileMenu.value = !mobileMenu.value;
  }
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
