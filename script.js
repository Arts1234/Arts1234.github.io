const messages = [
    "Enserio?",
    "Porfavor di q si",
    "100% segura?",
    "mividadiquesi:c",
    "m largo a llorar si dices q no"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const siButton = document.querySelector('.si-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleSiClick() {
    window.location.href = "yes_page.html";
}