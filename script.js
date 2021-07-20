document.querySelector('.submit').addEventListener('click', function(){
  let value = document.querySelector('.input').value

  let div = document.querySelector('.to-do')
  div.appendChild(document.createElement('p')).textContent = value
  
})