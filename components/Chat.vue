<script setup lang="ts">
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
  buttons: string[];
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
    buttons: ["Learn More", "Request Quote"],
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email at support@example.com or call us at +1234567890.",
    isOpen: false,
    buttons: ["Email Support", "Call Support"],
  },
  {
    question: "What are your working hours?",
    answer: "Our team is available Monday to Friday, 9 AM to 5 PM EST.",
    isOpen: false,
    buttons: ["Schedule Call", "View Calendar"],
  },
]);

// New ref for dynamic button position
const buttonPosition = ref({ bottom: "20px", right: "20px" });
const chatPosition = ref({ bottom: "20px", right: "20px" });

function handleScroll() {
  isScrolled.value = window.scrollY > 200;
  updateButtonPosition();
}

function updateButtonPosition() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (footerRect.bottom < viewportHeight) {
    // Footer is in view, position button above it
    buttonPosition.value.bottom = `${
      viewportHeight - footerRect.bottom + 20
    }px`;

    chatPosition.value.bottom = `${viewportHeight - footerRect.bottom + 75}px`;
  } else {
    // Footer is not in view, use default position
    buttonPosition.value.bottom = "25px";
    chatPosition.value.bottom = "80px";
  }

  // Update right position based on scroll
  buttonPosition.value.right = isScrolled.value ? "5rem" : "1rem";
  chatPosition.value.right = isScrolled.value ? "-.1rem" : "-.1rem";
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", updateButtonPosition);
  loadMessages();
  updateButtonPosition(); // Initial position update
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateButtonPosition);
});

//  ============= methods
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

    if (!hasReceivedAccordion()) {
      setTimeout(() => {
        addAccordionMessage();
        markAccordionReceived();
      }, 1000);
    }
  }, 500);
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

const hasReceivedAccordion = () => {
  return localStorage.getItem("receivedAccordion") === "true";
};

const markAccordionReceived = () => {
  localStorage.setItem("receivedAccordion", "true");
};

const addAccordionMessage = () => {
  addMessage("", false, true, "Frequently Asked Questions");
};

const handleButtonClick = (buttonText: string) => {
  // Handle button click here
  console.log(`Button clicked: ${buttonText}`);
  addMessage(`You clicked: ${buttonText}`, true);
  respondToUser(`You selected ${buttonText}`);
};

// Watch for changes in isChatboxOpen
watch(isChatboxOpen, () => {
  nextTick(() => {
    updateButtonPosition();
  });
});

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
    <!-- button toggle chat bot -->
    <div
      class="fixed z-50 transition-all duration-300 ease-in-out"
      :style="{
        bottom: buttonPosition.bottom,
        right: buttonPosition.right,
      }"
    >
      <button
        @click="toggleChatbox"
        class="bg-primary text-darkPrimary p-3 rounded-full hover:bg-darkPrimary hover:text-lightPrimary transition duration-300 flex items-center"
      >
        <Icon name="solar:chat-line-bold" class="w-5 h-5 cursor-pointer" />
      </button>
    </div>
    <!-- end button toggle chat bot -->

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
        class="fixed z-50 mx-8 w-auto sm:w-96 max-w-full sm:max-w-md"
        :style="{
          bottom: chatPosition.bottom,
          right: chatPosition.right,
        }"
      >
        <div
          class="bg-lightPrimary dark:bg-darkSecondary shadow-md rounded-lg w-full"
        >
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
                    : 'bg-lightSecondary text-darkSecondary dark:bg-darkPrimary dark:text-lightPrimary'
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
                      class="border-b border-darkSecondary dark:border-lightSecondary last:border-b-0"
                    >
                      <div
                        @click="toggleAccordionItem(itemIndex)"
                        class="flex items-center text-darkSecondary dark:text-lightSecondary w-full overflow-hidden cursor-pointer"
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
                            <button
                              class="hover:text-secondary dark:hover:text-primary"
                            >
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
                        <p class="mb-2">{{ item.answer }}</p>
                        <div class="flex space-x-2">
                          <button
                            v-for="(buttonText, buttonIndex) in item.buttons"
                            :key="buttonIndex"
                            @click="handleButtonClick(buttonText)"
                            class="bg-secondary hover:bg-primary text-darkPrimary dark:text-lightPrimary font-bold py-1 px-2 rounded text-sm"
                          >
                            {{ buttonText }}
                          </button>
                        </div>
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
          <!-- end chat section -->
        </div>
      </div>
    </transition>
  </div>
</template>
