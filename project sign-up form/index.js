document.addEventListener("DOMContentLoaded", function () {
    const validEmail = "ash@loremcompany.com";
    const userPrompt = document.getElementById("userprompt");
    const subscribeBtn = document.getElementById("btn");
    const errorEmail = document.getElementById("valid");

    subscribeBtn.addEventListener("click", function () {
        const promptValue = userPrompt.value;

        if (promptValue === validEmail) {
            window.location.href = "page2.html"; 
        } else {
            errorEmail.textContent = "Valid email required";
           userPrompt.style.borderColor = "red"; 
           userPrompt.style.backgroundColor = "#FFD1DC";
        }
    });
});

