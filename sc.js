const inpColor = document.querySelector('#color');
const btn = document.querySelector('.btn').addEventListener('click', function() {
  document.body.style.backgroundColor = `${inpColor.value}`;
  console.log(inpColor.value);
})