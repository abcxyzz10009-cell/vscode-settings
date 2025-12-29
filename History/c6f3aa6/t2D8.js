const btn = document.getElementById("openTerms");
const box = document.getElementById("termsBox");

btn.onclick = () => {
    box.style.display = (box.style.display === "block") ? "none" : "block";
};
