<template>
  <client-only>
    <div>
      <Icon
        name="material-symbols:light-mode-rounded"
        v-if="colorMode.preference === 'dark'"
        @click="toggleTheme"
        class="text-2xl pt-3 pb-4 my-3 md:my-0 font-semibold transition-all duration-200 bg-primary rounded-md hover:bg-[#c7b372]"
        role="button"
      />
      <Icon
        v-if="colorMode.preference === 'light'"
        name="material-symbols:mode-night"
        @click="toggleTheme"
        class="text-2xl py-3 my-3 md:my-0 font-semibold transition-all duration-200 bg-darkprimary rounded-md hover:bg-darkVariant"
        role="button"
      />
    </div>
  </client-only>
</template>

<script setup>
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>
