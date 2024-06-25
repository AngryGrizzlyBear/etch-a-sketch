const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.addEventListener('mouseover', 
  e => e.target.classList.add('my-color-class')
)

  cdiv.appendChild(div);
}