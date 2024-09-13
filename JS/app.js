let sub = document.querySelector(".btn");
let show = document.querySelector(".fb");
const hold = document.querySelectorAll(".noBtn");
hold.forEach((disp) => {
  disp.addEventListener("click", () => {
    let rate = disp.innerHTML.trim();
    show.innerHTML = rate;
  });
});

sub.addEventListener("click", () => {
  document.querySelector(".all").style.display = "none";
  document.querySelector(".aall").style.display = "flex";

  setTimeout(() => {
    document.querySelector(".aall").style.display = "none"; // Hide .aall
    document.querySelector(".all").style.display = "block"; // Show .all again
  }, 7000); // Time in milliseconds (5000 ms = 5 seconds)
});

