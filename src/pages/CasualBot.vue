<template>
  <div class="casual-bot-container">
    <div class="casual-bot-components">
      <div class="Casualbot-chat-interface">
        <div class="Casualbot-message-block">
          <div
            class="Casualbot-message"
            v-for="(text, index) in chatarray"
            :key="index"
          >
            {{ text.message }}
          </div>
        </div>
        <div class="Causalbot-input-container">
          <input
            v-model="userInput"
            type="text"
            placeholder="Ask me questions..."
            @keyup.enter="sendMessage"
          />
          <div class="button" @click="sendMessage">
            <i class="bi bi-send"></i>
          </div>
        </div>
      </div>
      <div class="Casualbot-interaction-block"></div>
    </div>
  </div>
</template>

<script>
import "../style/casualbot.css";
export default {
  data() {
    return {
      chatarray: [],
      userInput: "",
    };
  },
  methods: {
    systemResponse(){

    },
    sendMessage() {
      if (this.userInput.trim() !== "") {
        this.chatarray.push(
            {
                "message":this.userInput,
                "user":true
            }
        );
        this.userInput = "";
      }
    },
  },
};
</script>

<style>
</style>