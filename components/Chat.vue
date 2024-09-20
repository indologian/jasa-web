<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

interface Message {
  text: string;
  isUser: boolean;
  isAccordion?: boolean;
  title?: string;
}

interface AccordionItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const chatContainer = ref<HTMLElement | null>(null);
const chatbox = ref<HTMLElement | null>(null);
const userInput = ref<HTMLInputElement | null>(null);
const isChatboxOpen = ref(false);
const messages = ref<Message[]>([]);
const isScrolled = ref(false);
const accordionItems = ref<AccordionItem[]>([
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, mobile app development, and UI/UX design services.",
    isOpen: false,
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email at support@example.com or call us at +1234567890.",
    isOpen: false,
  },
  {
    question: "What are your working hours?",
    answer: "Our team is available Monday to Friday, 9 AM to 5 PM EST.",
    isOpen: false,
  },
]);

function handleScroll() {
  isScrolled.value = window.scrollY > 200;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  loadMessages();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleChatbox = () => {
  isChatboxOpen.value = !isChatboxOpen.value;
};

const sendMessage = () => {
  const message = userInput.value?.value.trim();
  if (message) {
    addMessage(message, true);
    respondToUser(message);
    if (userInput.value) userInput.value.value = "";
  }
};

const addMessage = (
  text: string,
  isUser: boolean,
  isAccordion: boolean = false,
  title: string = ""
) => {
  messages.value.push({ text, isUser, isAccordion, title });
  saveMessages();
  scrollToBottom();
};

const scrollToBottom = () => {
  if (chatbox.value) {
    chatbox.value.scrollTop = chatbox.value.scrollHeight;
  }
};

const respondToUser = (userMessage: string) => {
  setTimeout(() => {
    addMessage(
      "Thank you for your message! How can I assist you today?",
      false
    );
  }, 500);

  setTimeout(() => {
    addMessage("", false, true, "Frequently Asked Questions");
  }, 1000);
};

const toggleAccordionItem = (index: number) => {
  accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen;
};

const saveMessages = () => {
  localStorage.setItem("chatMessages", JSON.stringify(messages.value));
};

const loadMessages = () => {
  const savedMessages = localStorage.getItem("chatMessages");
  if (savedMessages) {
    messages.value = JSON.parse(savedMessages);
  } else {
    // If no saved messages, add the initial greeting
    addMessage(
      "Hello! Welcome to our web development chat. How can I assist you today?",
      false
    );
  }
};

// Watch for changes in the messages array and save to localStorage
watch(
  messages,
  () => {
    saveMessages();
  },
  { deep: true }
);
</script>

<template>
  <div>
    <div
      class="fixed z-50 mb-4 mr-4 transition-all duration-300 ease-in-out"
      :class="{
        'bottom-3 right-[4.5rem]': isScrolled,
        'bottom-3 right-4': !isScrolled,
      }"
    >
      <button
        @click="toggleChatbox"
        class="bg-primary text-darkPrimary p-3 rounded-full hover:bg-darkPrimary hover:text-lightPrimary transition duration-300 flex items-center"
      >
        <Icon name="solar:chat-line-bold" class="w-5 h-5 cursor-pointer" />
      </button>
    </div>
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isChatboxOpen"
        ref="chatContainer"
        class="fixed z-50 bottom-20 right-0 mx-8 w-auto sm:w-96 max-w-full sm:max-w-md"
      >
        <div class="bg-white shadow-md rounded-lg w-full">
          <div
            class="p-4 border-b bg-primary text-darkPrimary rounded-t-lg flex justify-between items-center"
          >
            <p class="text-lg font-semibold">Admin Bot</p>
            <button
              @click="toggleChatbox"
              class="text-darkSecondary hover:text-darkVariant/50 focus:outline-none focus:text-darkVariant/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <!-- chat section -->
          <div ref="chatbox" class="p-4 h-80 overflow-y-auto">
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="{
                'mb-2 text-right': message.isUser,
                'mb-2': !message.isUser,
              }"
            >
              <div
                :class="
                  message.isUser
                    ? 'bg-primary text-darkPrimary'
                    : 'bg-gray-200 text-gray-700'
                "
                class="rounded-lg py-2 px-4 inline-block"
              >
                <p v-if="!message.isAccordion">
                  {{ message.text }}
                </p>
                <div v-else class="w-full">
                  <h3 class="font-bold mb-2">{{ message.title }}</h3>
                  <div class="space-y-2">
                    <div
                      v-for="(item, itemIndex) in accordionItems"
                      :key="itemIndex"
                      class="border-b border-gray-300 last:border-b-0"
                    >
                      <div
                        @click="toggleAccordionItem(itemIndex)"
                        class="flex items-center text-gray-600 w-full overflow-hidden cursor-pointer"
                      >
                        <div
                          class="w-10 px-2 transform transition duration-300 ease-in-out"
                          :class="{
                            'rotate-90': item.isOpen,
                            '-translate-y-0.0': !item.isOpen,
                          }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                        <div class="flex items-center py-3">
                          <div class="mx-3">
                            <button class="hover:underline">
                              {{ item.question }}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="pl-12 pr-4 py-2 transform transition-all duration-300 ease-in-out"
                        :class="{
                          'h-auto opacity-100 mb-2': item.isOpen,
                          'h-0 opacity-0 overflow-hidden': !item.isOpen,
                        }"
                      >
                        {{ item.answer }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- input and button section -->
          <div class="p-4 border-t flex">
            <input
              ref="userInput"
              type="text"
              placeholder="Type a message"
              class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              @keyup.enter="sendMessage"
            />
            <button
              @click="sendMessage"
              class="bg-primary text-darkPrimary px-4 py-2 rounded-r-md hover:bg-darkPrimary hover:text-lightPrimary transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
