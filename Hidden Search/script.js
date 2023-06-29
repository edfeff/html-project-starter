const search = document.querySelector('.search')
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

//console.log(search, btn)
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})