<script setup lang="ts">
interface Feature {
  text: string;
}

interface Props {
  title: string;
  price: string;
  warranty: string;
  url: string;
  features: Feature[];
}

defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col h-full overflow-hidden bg-lightPrimary dark:bg-darkPrimary rounded-md shadow-xl"
  >
    <!-- price and title -->
    <div class="flex-grow p-8">
      <h3 class="text-base font-semibold text-secondary dark:text-primary">
        {{ title }}
      </h3>
      <p class="text-5xl font-bold mt-7">{{ price }}</p>

      <ul class="inline-flex flex-col items-start space-y-5 text-left mt-9">
        <li
          v-for="feature in features"
          :key="feature.text"
          class="inline-flex items-center space-x-2"
        >
          <svg
            class="flex-shrink-0 w-5 h-5 text-secondary dark:text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-base font-medium dark:text-lightPrimary">
            {{ feature.text }}
          </span>
        </li>
      </ul>
    </div>

    <!-- card button -->
    <div class="mt-auto p-8 pt-0">
      <NuxtLink
        :to="url"
        title=""
        class="inline-flex items-center justify-center w-full px-10 py-4 text-base font-bold text-darkPrimary transition-all duration-200 bg-primary rounded-md hover:bg-secondary focus:bg-secondary hover:text-lightPrimary"
        role="button"
      >
        Pesan Sekarang
      </NuxtLink>
      <p class="mt-4 text-sm text-gray-500 dark:text-slate-300">
        {{ warranty }}
      </p>
    </div>
  </div>
</template>
