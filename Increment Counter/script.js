const counters = document.querySelectorAll(".counter");

//速度逼近比例份额 值越大,增长越慢
const speedRatio = 20;

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    //+转成数字
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 50;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
