// const init = () => {
//   const panels = document.querySelectorAll(".panel");
//   panels.forEach((p) => {
//     p.addEventListener("mouseover", () => {
//       panels.forEach((pp) => pp.classList.remove("active"));
//       p.classList.add("active");
//     });
//   });
// };

//通用写法 对一组元素加事件，每个元素触发时，回调给cb，参数是（当前元素，全部集合，具体事件）
function toggleNodes(selector, event, cb) {
  const all = document.querySelectorAll(selector);
  if (all) {
    all.forEach((el) => el.addEventListener(event, (e) => cb(el, all, e)));
  }
}

window.addEventListener("load", () => {
  // init();
  toggleNodes(".panel", "mouseover", (cur, all) => {
    all.forEach((pp) => pp.classList.remove("active"));
    cur.classList.add("active");
  });
});
