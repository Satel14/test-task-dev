const blocks = document.querySelectorAll('.general-block > div');
blocks.forEach((block) => {
  let count = 0;
  block.addEventListener('click', () => {
    count++;
    block.style.backgroundColor = getRandomColor();
    block.textContent = `Clicked ${count} times`;
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
