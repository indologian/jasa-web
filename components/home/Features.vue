<template>
  <section class="container mb-24">
    <div class="mx-auto max-w-5xl">
      <h2
        class="text-3xl mb-24 text-center font-bold leading-tight sm:text-4xl lg:text-5xl"
      >
        Keunggulan
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-14 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12"
      >
        <HomePartialsFeatureItem
          title="Mudah"
          iconName="mdi:hand-okay"
          bgClass="bg-variant1"
        />
        <HomePartialsFeatureItem
          title="Cepat"
          iconName="carbon:running"
          bgClass="bg-secondary"
        />
        <HomePartialsFeatureItem
          title="Bergaransi"
          iconName="iconamoon:certificate-badge-fill"
          bgClass="bg-primary"
        />
        <HomePartialsFeatureItem
          title="Responsive"
          iconName="mdi:responsive"
          bgClass="bg-darkVariant"
        />
      </div>
    </div>
  </section>
</template>
