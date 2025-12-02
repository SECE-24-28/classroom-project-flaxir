// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    
    if (chatbotToggle && chatbotWidget && chatbotClose) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWidget.style.display = chatbotWidget.style.display === 'none' ? 'block' : 'none';
            if (chatbotWidget.style.display === 'block' && chatMessages.children.length === 0) {
                addMessage('Hi! I\'m Mathan\'s AI assistant. Ask me about his projects, skills, or experience!', 'bot');
            }
        });
        
        chatbotClose.addEventListener('click', () => {
            chatbotWidget.style.display = 'none';
        });
        
        function addMessage(text, sender) {
            const message = document.createElement('div');
            message.className = `message ${sender}-message`;
            message.textContent = text;
            chatMessages.appendChild(message);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function sendMessage() {
            const text = chatInput.value.trim();
            if (!text) return;
            
            addMessage(text, 'user');
            chatInput.value = '';
            
            setTimeout(() => {
                const responses = {
                    'hello': 'Hello! How can I help you learn more about Mathan?',
                    'projects': 'Mathan has worked on LINKLIFE (healthcare platform), voice-enabled blogging, and interactive web applications. Check the Projects page!',
                    'skills': 'Mathan is skilled in JavaScript, HTML/CSS, Python, C/C++, and AI/ML concepts. He\'s solved 250+ coding problems!',
                    'contact': 'You can reach Mathan at mathanprasath.s2024aids@sece.ac.in or connect on LinkedIn!',
                    'achievements': 'Mathan won Createathon 2K25 and was a top 5 finalist in Freshathon out of 100+ teams!'
                };
                
                const lowerText = text.toLowerCase();
                let response = 'I can help you learn about Mathan\'s projects, skills, achievements, or contact info. What would you like to know?';
                
                for (const [key, value] of Object.entries(responses)) {
                    if (lowerText.includes(key)) {
                        response = value;
                        break;
                    }
                }
                
                addMessage(response, 'bot');
            }, 1000);
        }
        
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});