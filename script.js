// FAQ toggle
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
// Chatbot open/close
const bubble = document.getElementById('chatbot-bubble');
const box = document.getElementById('chatbot-box');
const closeBtn = document.getElementById('chatbot-close');
bubble.onclick = () => box.classList.remove('hidden');
closeBtn.onclick = () => box.classList.add('hidden');

// Chatbot simple AI logic
const form = document.getElementById('chatbot-form');
const input = document.getElementById('chatbot-input');
const messages = document.getElementById('chatbot-messages');

form.onsubmit = function(e) {
  e.preventDefault();
  const userMsg = input.value.trim();
  if (!userMsg) return;
  addMessage(userMsg, 'user');
  input.value = '';
  setTimeout(() => {
    addMessage(getBotReply(userMsg), 'bot');
    messages.scrollTop = messages.scrollHeight;
  }, 600);
  messages.scrollTop = messages.scrollHeight;
};

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'chatbot-message ' + sender;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// Simple AI responses (expand as needed)
function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('service') || msg.includes('offer')) {
    return "We offer a wide range of medical services, including personalized care, expert consultations, and 24/7 support.";
  }
  if (msg.includes('how') && msg.includes('start')) {
    return "Just click the 'Get Started' button at the top of the page to begin!";
  }
  if (msg.includes('contact')) {
    return "You can contact us via the form on our website or email us at support@intellecare.com.";
  }
  if (msg.includes('ai') || msg.includes('chatbot')) {
    return "I'm your AI assistant here to help you learn more about Medical IntelleCare!";
  }
  if (msg.includes('network')) {
    return "We have a wide network of expert doctors and healthcare providers.";
  }
  if (msg.includes('faq')) {
    return "Scroll down to the FAQ section for answers to common questions!";
  }
  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! How can I assist you today?";
  }
  return "I'm here to help! Please ask me anything about Medical IntelleCare.";
}