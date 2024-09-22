import { onMounted, onUnmounted, ref } from "vue";

export default function useCarousel(totalSlides: number) {
  const currentSlide = ref(0);
  const isAutoPlaying = ref(true);
  let autoPlayInterval: number | null = null;
  let touchStartX = 0;
  let touchEndX = 0;

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

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      nextSlide();
    }
    if (touchEndX - touchStartX > 75) {
      prevSlide();
    }
    touchStartX = 0;
    touchEndX = 0;
  };

  onMounted(() => {
    startAutoPlay();
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  });

  onUnmounted(() => {
    stopAutoPlay();
    document.removeEventListener("touchstart", handleTouchStart);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
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