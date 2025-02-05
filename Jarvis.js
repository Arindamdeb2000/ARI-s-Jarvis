</style>
</head>
<body>
    <div class="chat-container">
        <img src="YOUR_UPLOADED_IMAGE_PATH" class="avatar" alt="ARI's Avatar">
        <h2>ARI's Jarvis</h2>
        <div class="chat-box" id="chatBox">Welcome to ARI's Jarvis!</div>
        <input type="text" id="userInput" class="user-input" placeholder="Type your message...">
        <button onclick="sendMessage()">Send</button>
    </div>

    <script>
        async function sendMessage() {
            let userInput = document.getElementById("userInput").value;
            let chatBox = document.getElementById("chatBox");
            
            if (!userInput) return;
            
            chatBox.innerHTML += `<div style='color:#0ff;'>You: ${userInput}</div>`;
            document.getElementById("userInput").value = "";
            
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "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"
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{"role": "user", "content": userInput}]
                })
            });
            
            const data = await response.json();
            let botReply = data.choices[0].message.content;
            
            chatBox.innerHTML += `<div style='color:#ff0;'>ARI's Jarvis: ${botReply}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    </script>
</body>
</html>
