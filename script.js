document.getElementById("message").addEventListener("click", function() {
    this.style.animation = "colorChange 1s forwards";
    this.style.fontSize = "80px";

    const duration = 5 * 1000; // 5 seconds of confetti rain
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});
