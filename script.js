const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.classList.add("delete");
  div.addEventListener('mouseover', 
  e => e.target.classList.add('my-color-class')
)
  cdiv.appendChild(div);
}
const button = document.querySelector('.btn')
button.addEventListener('click', refreshButton);

function refreshButton(){
document.querySelectorAll(".delete").forEach(el => el.remove());

}

