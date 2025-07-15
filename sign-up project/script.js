const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.signup');
const loginBtn = document.querySelector('.login');
const backBtn_L = document.querySelector('.back-l');
const backBtn_R = document.querySelector('.back-r');


let condition = null;


signUpBtn.addEventListener('click', () => {
  container.classList.remove('move-right', 'move-center');
  container.classList.add('move-left');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('move-left', 'move-center');
  container.classList.add('move-right');
  
});

backBtn_L.addEventListener('click', () => {
  container.classList.remove('move-right', 'move-left');
  container.classList.add('move-center');
});

backBtn_R.addEventListener('click', () => {
  container.classList.remove('move-right', 'move-left');
  container.classList.add('move-center');
});