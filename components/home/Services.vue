<template>
  <section class="container mx-auto mb-16">
    <div class="container mx-auto">
      <h2 class="text-3xl text-center font-bold leading-tight sm:text-4xl lg:text-5xl">
        Layanan
      </h2>
      <div
        class="grid justify-center items-center max-w-md grid-cols-1 gap-12 mx-auto md:max-w-full my-12 md:my-20 md:grid-cols-2">
        <HomePartialsService v-for="(service, index) in services" :key=" index " :label=" service " />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  "Web Company Profile",
  "Web Profesional",
  "Web Sekolah",
  "Web Undangan Pernikahan",
];
</script>
