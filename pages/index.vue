<script setup lang="ts">
const route = useRoute();

useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }]
});

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <HomeBanner />
  <HomeFeatures />
  <HomeServices />
  <HomePricing />
  <HomePortfolio />
</template>
