document.addEventListener("DOMContentLoaded", function() {
    VanillaTilt.init(document.querySelector(".box"), {
        max: 10,
        speed: 200,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        reverse: true,
        glare: true,
        "max-glare": 0.1
    });
});
