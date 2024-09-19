import { onMounted, onUnmounted, ref } from "vue";

export default function useCarousel(totalSlides: number) {
  const currentSlide = ref(0);
  const isAutoPlaying = ref(true);
  let autoPlayInterval: number | null = null;

  const showSlide = (index: number) => {
    currentSlide.value = index;
  };

  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
  };

  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
  };

  const startAutoPlay = () => {
    if (autoPlayInterval) return;
    autoPlayInterval = window.setInterval(nextSlide, 8000);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  };

  const toggleAutoPlay = () => {
    isAutoPlaying.value = !isAutoPlaying.value;
    isAutoPlaying.value ? startAutoPlay() : stopAutoPlay();
  };

  onMounted(() => {
    startAutoPlay();
  });

  onUnmounted(() => {
    stopAutoPlay();
  });

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    showSlide,
    isAutoPlaying,
    toggleAutoPlay,
  };
}
