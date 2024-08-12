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
    systemResponse() {
      console.log("req sent")
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
            throw new Error("response failed");
          }
          return res.json();
        })
        .then((data) => {
          console.log("success");
          this.chatarray.push({
            message: data.response,
            user: false,
          });
        })
        .catch((err) => console.log(err));
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
};
</script>

<style>
</style>