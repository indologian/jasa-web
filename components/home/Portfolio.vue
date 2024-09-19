<template>
  <div class="container mx-auto pb-64">
    <div class="container mx-auto md:h-[400px] lg:h-[600px] h-72">
      <!-- Carousel wrapper -->
      <div class="relative h-full" data-carousel-inner>
        <h2
          class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mx-auto text-center mb-24"
        >
          Portfolio
        </h2>
        <div
          id="default-carousel"
          class="absolute w-full h-full overflow-hidden rounded-lg"
          data-carousel="static"
        >
          <HomePartialsPortfolioItem
            v-for="(item, index) in protfolioItems"
            :key="index"
            :image-url="item.imageUrl"
            :button-text="item.buttonText"
            :is-active="currentSlide === index"
            :button-url="item.buttonUrl"
          />
        </div>

        <!-- Slider indicators -->
        <div
          class="flex absolute bottom-[-3rem] md:bottom-[-.1rem] left-1/2 z-30 -translate-x-1/2 space-x-2"
          data-carousel-indicators
        >
          <button
            v-for="(_, index) in protfolioItems"
            :key="index"
            type="button"
            class="w-3 h-3 rounded-full transition"
            :class="
              currentSlide === index
                ? 'bg-primary'
                : 'bg-lightSecondary hover:bg-lightPrimary'
            "
            @click="showSlide(index)"
          ></button>
        </div>

        <!-- Slider controls -->
        <Icon
          name="material-symbols:arrow-circle-left-outline-rounded"
          type="button"
          class="absolute left-8 z-40 items-center justify-center w-10 h-10 bg-secondary hover:bg-darkPrimary dark:bg-primary dark:hover:bg-lightSecondary focus:outline-none transition transform bottom-[-7.5rem] md:bottom-[-7rem]"
          @click="prevSlide"
        />

        <Icon
          name="material-symbols:arrow-circle-right-outline-rounded"
          type="button"
          class="absolute right-8 z-40 items-center justify-center w-10 h-10 bg-secondary hover:bg-darkPrimary dark:bg-primary dark:hover:bg-lightSecondary focus:outline-none transition bottom-[-7.5rem] md:bottom-[-7rem]"
          @click="nextSlide"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCarousel from "~/composables/useCarousel";

const protfolioItems = ref([
  {
    imageUrl: "https://loremflickr.com/320/240/dog",
    buttonText: "Demo",
    buttonUrl: "/",
  },
  {
    imageUrl: "https://loremflickr.com/320/240/cat",
    buttonText: "Demo",
    buttonUrl: "/",
  },
  {
    imageUrl: "https://picsum.photos/200/300",
    buttonText: "Demo",
    buttonUrl: "/",
  },
]);

const { currentSlide, nextSlide, prevSlide, showSlide } = useCarousel(
  protfolioItems.value.length
);
</script>
