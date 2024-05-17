const image = document.getElementById('main3');
const button1 = document.getElementById('button1');

button1.addEventListener('click', () => {
  if (!image.classList.contains('hidden')) {
    image.classList.add('hidden');
  }
});