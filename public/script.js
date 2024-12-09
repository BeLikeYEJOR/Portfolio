const goToHome = document.querySelector("#homeB");
const goToAbout = document.querySelector("#aboutB");
const goToContact = document.querySelector("#contactB");
const goToHome1 = document.querySelector("#homeS");
const goToAbout2 = document.querySelector("#aboutS");
const goToContact3 = document.querySelector("#contactS");
const sidebar_open = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");
const sidebar_close = document.querySelector(".sidebar .brandingNav");

goToHome.addEventListener("click", () => {
  window.scroll({
    top: 0,
  });
});

goToAbout.addEventListener("click", () => {
  window.scroll({
    top: 720,
  });
});

goToContact.addEventListener("click", () => {
  window.scroll({
    top: 1440,
  });
});

goToHome1.addEventListener("click", () => {
  window.scroll({
    top: 0,
  });
});

goToAbout2.addEventListener("click", () => {
  window.scroll({
    top: 720,
  });
});

goToContact3.addEventListener("click", () => {
  window.scroll({
    top: 1440,
  });
});


sidebar_open.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

sidebar_close.addEventListener("click", () => {
  sidebar.style.display = "none";
});
