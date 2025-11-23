let main = document.querySelector("main");
let progressBar = document.querySelector("#bar");
let label = document.querySelector("#progress-label");

window.addEventListener("scroll", () => {
    let percent = Math.ceil(
        (window.scrollY / main.offsetHeight) * 100
    );
    percent = Math.min(Math.max(percent, 0), 100);
    progressBar.style.width = percent + "%";
    label.textContent = percent + "%";
});

