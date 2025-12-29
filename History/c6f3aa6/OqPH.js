const modal = document.getElementById("termsModal");
const openBtn = document.getElementById("openTerms");
const closeBtn = document.querySelector(".close");

openBtn.onclick = function () {
    modal.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

// bấm ra ngoài thì đóng
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
