<script setup lang="ts">
const pricingData = [
  {
    title: "Exclusive",
    price: "$79",
    warranty: "14 Days Moneyback Guarantee",
    url: "#",
    features: [
      { text: "Unlimited Domain License" },
      { text: "Full Celebration Library" },
      { text: "120+ Coded Blocks" },
      { text: "Design Files Included" },
      { text: "Premium Support" },
    ],
  },
  {
    title: "Premium",
    price: "$99",
    warranty: "14 Days Moneyback Guarantee",
    url: "#",
    features: [
      { text: "Unlimited Domain License" },
      { text: "Full Celebration Library" },
      { text: "120+ Coded Blocks" },
      { text: "Design Files Included" },
      { text: "Premium Support" },
      { text: "Priority Updates" },
    ],
  },
  {
    title: "Enterprise",
    price: "$149",
    warranty: "14 Days Moneyback Guarantee",
    url: "#",
    features: [
      { text: "Unlimited Domain License" },
      { text: "Full Celebration Library" },
      { text: "120+ Coded Blocks" },
      { text: "Design Files Included" },
      { text: "Premium Support" },
      { text: "Priority Updates" },
      { text: "Custom Integrations" },
    ],
  },
];
</script>

<template>
  <section class="container mx-auto mb-16">
    <div class="container mx-auto">
      <h2
        class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mx-auto text-center"
      >
        Pricing & Plans
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-12 md:my-20 text-center"
      >
        <HomePartialsPriceCard
          v-for="plan in pricingData"
          :key="plan.title"
          :title="plan.title"
          :price="plan.price"
          :warranty="plan.warranty"
          :url="plan.url"
          :features="plan.features"
        />
      </div>
    </div>
  </section>
</template>
