const text =
"Hey Nidhi, I have a little surprise for you... 🎁💖";

let i = 0;

function typingEffect() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 70);
    }
}

typingEffect();

/* Scroll */

function scrollToWish() {

    document
        .getElementById("wish")
        .scrollIntoView({
            behavior: "smooth"
        });
}

/* Gift Open */

function openGift() {

    const secret =
        document.getElementById("secret");

    secret.style.display = "block";

    createBurst();
}

/* Floating Hearts */

function createParticles() {

    const emoji = [
        "💖",
        "💕",
        "💗",
        "💓",
        "🌸",
        "✨",
        "🎀",
        "🩷"
    ];

    setInterval(() => {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.innerHTML =
            emoji[Math.floor(
                Math.random() *
                emoji.length
            )];

        particle.style.left =
            Math.random() *
            window.innerWidth +
            "px";

        particle.style.fontSize =
            Math.random() * 20 +
            20 +
            "px";

        document.body.appendChild(
            particle
        );

        setTimeout(() => {

            particle.remove();

        }, 10000);

    }, 400);
}

createParticles();

/* Gift Burst Effect */

function createBurst() {

    const burstEmoji = [
        "💖",
        "💕",
        "✨",
        "🎉",
        "🌸"
    ];

    for (let i = 0; i < 40; i++) {

        const item =
            document.createElement("div");

        item.innerHTML =
            burstEmoji[
                Math.floor(
                    Math.random() *
                    burstEmoji.length
                )
            ];

        item.style.position =
            "fixed";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.fontSize =
            "30px";

        item.style.pointerEvents =
            "none";

        item.style.zIndex =
            "999";

        document.body.appendChild(
            item
        );

        const x =
            (Math.random() - 0.5) *
            600;

        const y =
            (Math.random() - 0.5) *
            600;

        item.animate(
            [
                {
                    transform:
                        "translate(0,0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px, ${y}px)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            item.remove();
        }, 1500);
    }
}
