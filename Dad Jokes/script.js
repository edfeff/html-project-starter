const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function nextJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  joke.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", nextJoke);
nextJoke();

// function nextJoke() {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((data) => {
//       console.log(data);
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//       joke.innerHTML = `${data.joke}`;
//     })
//     .catch((e) => {
//       joke.innerText = `Can not connect the server. Retry later ...`;
//     });
// }
