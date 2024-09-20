<script setup lang="ts">
const menus = ref([
  {
    title: "Resources",
    items: [
      { text: "SaaS Development", link: "javascript:void(0)" },
      { text: "Our Products", link: "javascript:void(0)" },
      { text: "User Flow", link: "javascript:void(0)" },
      { text: "User Strategy", link: "javascript:void(0)" },
    ],
  },
  {
    title: "Company",
    items: [
      { text: "About Us", link: "javascript:void(0)" },
      { text: "Careers", link: "javascript:void(0)" },
      { text: "Our Team", link: "javascript:void(0)" },
      { text: "Contact Us", link: "javascript:void(0)" },
    ],
  },
]);
</script>

<template>
  <!-- ====== Footer Section Start -->
  <footer class="bg-primary dark:bg-darkPrimary pt-20 pb-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Contact -->
        <div class="w-full">
          <a href="javascript:void(0)" class="mb-6 inline-block max-w-[160px]">
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
              alt="logo"
              class="max-w-full dark:hidden"
            />
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
              alt="logo"
              class="max-w-full hidden dark:block"
            />
          </a>
          <p class="text-base text-body-color dark:text-dark-6 mb-7">
            Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem
            totam rem aperiam.
          </p>
          <p
            class="flex items-center text-sm font-medium text-dark dark:text-lightPrimary"
          >
            <span class="mr-3 text-secondary">
              <Icon name="material-symbols:call" class="w-5 h-5" />
            </span>
            <span>+012 (345) 678 99</span>
          </p>
        </div>

        <!-- Menu -->
        <div class="w-full">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="menu in menus" :key="menu.title">
              <h4
                class="text-lg font-semibold text-secondary dark:text-lightPrimary mb-6"
              >
                {{ menu.title }}
              </h4>
              <ul class="space-y-3">
                <li v-for="item in menu.items" :key="item.text">
                  <a
                    :href="item.link"
                    class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="w-full">
          <h4
            class="text-lg font-semibold text-secondary dark:text-lightPrimary mb-6"
          >
            Follow Us On
          </h4>
          <div class="flex items-center mb-6">
            <NuxtLink
              v-for="(icon, index) in [
                'ri:facebook-fill',
                'mingcute:twitter-fill',
                'mdi:youtube',
                'f7:logo-instagram',
              ]"
              :key="index"
              to="javascript:void(0)"
              class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-lightPrimary hover:text-lightPrimary sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <Icon :name="icon" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="w-full mt-8 text-center">
        <p class="text-base text-body-color dark:text-dark-6">
          &copy; 2025 Beni Mustiko Aji
        </p>
      </div>
    </div>
  </footer>
  <!-- ====== Footer Section End -->
</template>