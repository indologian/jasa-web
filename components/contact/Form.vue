<template>
  <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
    <div
      class="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12"
    >
      <form>
        <div class="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div class="mb-6">
          <input
            type="email"
            placeholder="Your Email"
            class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div class="mb-6">
          <input
            type="text"
            placeholder="Your Phone"
            class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div class="mb-6">
          <textarea
            rows="6"
            placeholder="Your Message"
            class="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full p-3 text-darkPrimary font-bold transition border rounded border-primary bg-primary hover:bg-opacity-90"
          >
            Send Message
          </button>
        </div>
      </form>
      <div>
        <ContactRightDots />
        <ContactLeftDots />
      </div>
    </div>
  </div>
</template>
