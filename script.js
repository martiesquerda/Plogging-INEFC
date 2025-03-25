document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    document.querySelectorAll(".layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateY(${scrollTop * speed}px)`;
    });
});
