const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

function checkBoxes(e) {
  const toggleBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < toggleBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

//DEBUG
const div = document.createElement("div");
div.style.position = "fixed";
div.style.top = "0";
div.style.left = "0";
div.style.width = "100%";
div.style.zIndex = "1";
// div.style.backgroundColor = "rgba(0,0,0,.1)";
div.style.borderBottom = "1px solid black";
div.style.height = (window.innerHeight / 5) * 4 + "px";
document.body.appendChild(div);
div.style.display = "none";
const debug = document.getElementById("debug");
debug.addEventListener("click", () => {
  div.style.display = div.style.display === "block" ? "none" : "block";
});
//end DEBUG
