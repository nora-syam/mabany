



let nums2 = document.querySelectorAll(".nums2 .num2");
let Section = document.querySelector(".one");
let start = false; // Function Started ? No

window.onscroll = function () {
if (window.scrollY >= Section.offsetTop) {
  if (!start) {
    nums2.forEach((num2) => startCount(num2));
  }
  start = true;
}
};
function startCount(el) {
let goal2 = el.dataset.goal;
let count2 = setInterval(() => {
  el.textContent++;
  if (el.textContent == goal2) {
    clearInterval(count2);
  }
}, 2000 / goal2);
}









