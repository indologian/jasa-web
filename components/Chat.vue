<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

interface Message {
  text: string;
  isUser: boolean;
}

const chatContainer = ref<HTMLElement | null>(null);
const chatbox = ref<HTMLElement | null>(null);
const userInput = ref<HTMLInputElement | null>(null);
const isChatboxOpen = ref(false);
const messages = ref<Message[]>([]);
const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 200;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
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

const addMessage = (text: string, isUser: boolean) => {
  messages.value.push({ text, isUser });
  scrollToBottom();
};

const scrollToBottom = () => {
  if (chatbox.value) {
    chatbox.value.scrollTop = chatbox.value.scrollHeight;
  }
};

const respondToUser = (userMessage: string) => {
  // Replace this with your chatbot logic
  setTimeout(() => {
    addMessage("This is a response from the chatbot.", false);
  }, 500);
};

onMounted(() => {
  // Add initial messages
  addMessage(
    "Halo, Salam dari admin webdev. Admin web dev siap membantumu. Jika ada yang ingin ditanyakan silahkan kirimkan pesan",
    false
  );
});
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
          <div ref="chatbox" class="p-4 h-80 overflow-y-auto">
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="{
                'mb-2 text-right': message.isUser,
                'mb-2': !message.isUser,
              }"
            >
              <p
                :class="
                  message.isUser
                    ? 'bg-primary text-darkPrimary'
                    : 'bg-gray-200 text-gray-700'
                "
                class="rounded-lg py-2 px-4 inline-block"
              >
                {{ message.text }}
              </p>
            </div>
          </div>
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
