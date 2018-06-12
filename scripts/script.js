
const body = document.body;
const btn = document.querySelector('.button-menu');

btn.addEventListener('click', function(){
  body.classList.toggle('show');
});

