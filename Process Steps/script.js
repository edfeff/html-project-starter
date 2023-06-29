const process = document.querySelector("#process");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let curActive = 1;
const update = () => {
  //里程标记判定
  circles.forEach((circle, idx) => {
    if (idx < curActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //计算的个数比例
  process.style.width = `${((curActive - 1) / (circles.length - 1)) * 100}%`;

  //按钮禁用判定
  prev.disabled = curActive == 1;
  next.disabled = curActive == circles.length;

  // if (curActive == 1) {
  //   prev.disabled = true;
  // } else if (curActive == circles.length) {
  //   next.disabled = true;
  // } else {
  //   prev.disabled = false;
  //   next.disabled = false;
  // }
};

prev.addEventListener("click", () => {
  curActive--;
  if (curActive > circles.length) {
    curActive = circles.length;
  }
  update();
});

next.addEventListener("click", () => {
  curActive++;
  if (curActive > circles.length) {
    curActive = circles.length;
  }
  update();
});
