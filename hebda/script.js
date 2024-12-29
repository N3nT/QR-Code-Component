const body = document.querySelector('body');
const emote = document.querySelector(".wrapper_link-emote");
let startFontSize = parseInt(window.getComputedStyle(emote).fontSize, 10); // Pobranie aktualnego rozmiaru czcionki jako liczby

const decreaseSize = () => {
    let currentSize = parseInt(window.getComputedStyle(emote).fontSize, 10); // Pobranie aktualnego rozmiaru czcionki
    if (currentSize > startFontSize - 5) {
        emote.style.fontSize = `${currentSize - 1}px`; // Zmniejszanie o 1px
        setTimeout(decreaseSize, 50); // Powtarzaj co 50ms
    }
};

const increaseSize = () => {
    let currentSize = parseInt(window.getComputedStyle(emote).fontSize, 10); // Pobranie aktualnego rozmiaru czcionki
    if (currentSize < startFontSize + 5) {
        emote.style.fontSize = `${currentSize + 1}px`; // Powiększanie o 1px
        setTimeout(increaseSize, 50); // Powtarzaj co 50ms
    }
};

const pulseEmote = () => {
    let currentSize = parseInt(window.getComputedStyle(emote).fontSize, 10); // Pobranie aktualnego rozmiaru czcionki
    if (currentSize >= startFontSize + 5) {
        decreaseSize(); // Zmniejszaj rozmiar
    } else {
        increaseSize(); // Powiększaj rozmiar
    }
};

// Wywołanie efektu pulsowania w pętli
const startPulse = () => {
    setInterval(pulseEmote, 800); // Wywołuje `pulseEmote` co 500ms
};

body.addEventListener('load', startPulse());
