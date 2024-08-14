<template>
  <div class="casual-bot-container">
    <div class="casual-bot-components">
      <div class="Casualbot-chat-interface">
        <div class="Casualbot-message-block">
          <div
            :class="['Casualbot-message', { system: !text.user }]"
            v-for="(text, index) in chatarray"
            :key="index"
          >
            {{ text.message }}
          </div>
        </div>
        <div :class="['Causalbot-input-container', { disabled: isDisabled }]">
          <input
            v-model="userInput"
            type="text"
            placeholder="Ask me questions..."
            @keyup.enter="sendMessage"
            :disabled="isDisabled"
          />
          <div
            class="button"
            @click="sendMessage"
            :class="{ disabled: isDisabled }"
          >
            <i class="bi bi-send"></i>
          </div>
        </div>
      </div>
      <div class="Casualbot-interaction-block">
        <span>Lawyer Bot</span>
        <div class="status-area">
          <div v-show="primary">Hello</div>
          <div v-show="!primary">
            <div v-if="status">Here is the Answer</div>
            <div v-else>Thinking</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../style/casualbot.css";
import { gsap } from "gsap";
export default {
  data() {
    return {
      chatarray: [],
      userInput: "",
      status: false,
      primary: true,
      isDisabled: false, // This controls the disabled state
    };
  },
  methods: {
    systemResponse() {
      this.primary = false;
      this.status = false;
      this.isDisabled = true; // Disable the input and button

      console.log("req sent");
      fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: this.userInput.toString(),
        }),
      })
        .then((res) => {
          if (!res.ok) {
            this.status = res.status;
            throw new Error("response failed");
          }
          return res.json();
        })
        .then((data) => {
          console.log("success");
          this.status = data.status;
          console.log(data.status);
          this.chatarray.push({
            message: data.response,
            user: false,
          });
          this.isDisabled = false; // Re-enable the input and button
        })
        .catch((err) => {
          console.log(err);
          this.isDisabled = false; // Ensure the input is re-enabled even if there's an error
        });
    },
    sendMessage() {
      if (this.userInput.trim() !== "") {
        this.chatarray.push({
          message: this.userInput,
          user: true,
        });
        this.systemResponse();
        this.userInput = "";
      }
    },
  },
  mounted() {
    gsap.from(".Causalbot-input-container", {
      yPercent: -1000,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });
  },
};
</script>
