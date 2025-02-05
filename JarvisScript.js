document.getElementById("send-btn").addEventListener("click", function () {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Display user message
    appendMessage("You", userInput);

    // Send to OpenAI API
    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    })
    .then(response => response.json())
    .then(data => {
        let botReply = data.choices[0].message.content;
        appendMessage("ARI's Jarvis", botReply);
    })
    .catch(error => console.error("Error:", error));

    document.getElementById("user-input").value = ""; // Clear input
});

function appendMessage(sender, message) {
    let chatBox = document.getElementById("chat-box");
    let msgElement = document.createElement("div");
    msgElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
}
