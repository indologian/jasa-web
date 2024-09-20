<template>
  <!-- ====== Contact Section Start -->
  <section>
    <div
      class="z-10 overflow-hidden container mx-auto h-full flex flex-wrap lg:justify-between items-center pb-12"
    >
      <!-- contatc -->
      <div class="w-full h-full px-4 md:w-1/2 xl:w-6/12">
        <div
          class="mb-8 max-w-[570px] md:max-w-[290px] lg:md:max-w-[570px] lg:mb-0"
        >
          <h2
            class="block text-secondary dark:text-primary text-dark mb-2 text-2xl font-bold uppercase"
          >
            Contact Us
          </h2>
          <p
            class="text-base leading-relaxed text-justify dark:text-lightPrimary mb-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
          <div class="mb-6 flex w-full max-w-[370px]">
            <div
              class="bg-primary/5 text-secondary dark:text-primary mr-6 md:mr-4 lg:mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
            >
              <Icon name="ph:building-office-duotone" class="w-9 h-9" />
            </div>
            <div class="w-full">
              <h4
                class="mb-1 text-xl font-bold text-dark dark:text-lightPrimary"
              >
                Our Location
              </h4>
              <p class="text-base text-body-color dark:text-lightPrimary">
                99 S.t Jomblo Park Pekanbaru 28292. Indonesia
              </p>
            </div>
          </div>
          <div class="mb-6 flex w-full max-w-[370px]">
            <div
              class="bg-primary/5 text-secondary dark:text-primary mr-6 md:mr-4 lg:mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
            >
              <Icon name="nimbus:whatsapp" class="w-9 h-9" />
            </div>
            <div class="w-full">
              <h4
                class="mb-1 text-xl font-bold text-dark dark:text-lightPrimary"
              >
                Phone Number
              </h4>
              <p class="text-base text-body-color dark:text-lightPrimary">
                (+62)81 414 257 9980
              </p>
            </div>
          </div>
          <div class="mb-6 flex w-full max-w-[370px]">
            <div
              class="bg-primary/5 text-secondary dark:text-primary mr-6 md:mr-4 lg:mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
            >
              <Icon name="ic:outline-mail" class="w-9 h-9" />
            </div>
            <div class="w-full">
              <h4
                class="mb-1 text-xl font-bold text-dark dark:text-lightPrimary"
              >
                Email Address
              </h4>
              <p class="text-base text-body-color dark:text-lightPrimary">
                info@yourdomain.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ====== Contact Form Start -->
      <div class="w-full h-full md:w-1/2 xl:w-5/12">
        <div
          class="relative px-8 py-10 bg-lightPrimary dark:bg-darkPrimary rounded-lg shadow-xl"
        >
          <form>
            <div class="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                class="border-stroke dark:border-lightPrimary dark:text-lightPrimary dark:bg-lightSecondary text-secondary focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
              />
            </div>
            <div class="mb-5">
              <input
                type="email"
                placeholder="Your Email"
                class="border-stroke dark:border-lightPrimary dark:text-lightPrimary dark:bg-lightSecondary text-secondary focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
              />
            </div>
            <div class="mb-5">
              <input
                type="text"
                placeholder="Your Phone"
                class="border-stroke dark:border-lightPrimary dark:text-lightPrimary dark:bg-lightSecondary text-secondary focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
              />
            </div>
            <div class="mb-5">
              <textarea
                rows="6"
                placeholder="Your Message"
                class="max-h-24 border-stroke dark:border-lightPrimary dark:text-lightPrimary dark:bg-lightSecondary text-secondary focus:border-primary w-full resize-none rounded border pt-3 px-[14px] text-base outline-none"
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
    </div>
  </section>
  <!-- ====== Contact Section End -->
</template>
