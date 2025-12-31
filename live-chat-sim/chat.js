const chat = document.getElementById("chat-messages");

function postMessage(user, text) {
  const msg = document.createElement("div");
  msg.className = "chat-message";
  msg.innerHTML = `
    <span class="username">${user}:</span>
    <span class="message-text">${text}</span>
  `;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function randomBotMessage() {
  const bot = bots[Math.floor(Math.random() * bots.length)];
  const phrase = bot.phrases[Math.floor(Math.random() * bot.phrases.length)];
  postMessage(bot.name, phrase);
}

function scheduleNextMessage() {
  const delay = Math.random() * 4000 + 4000;

  setTimeout(() => {
    randomBotMessage();
    scheduleNextMessage();
  }, delay);
}

scheduleNextMessage();
