<template>
  <div
    class="relative bg-lightSecondary dark:bg-darkSecondary dark:text-lightPrimary"
  >
    <Navbar />
    <slot />
    <ScrollTop />
    <Chat />
    <Footer />
  </div>
</template>
