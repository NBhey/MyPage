import './style.css'


if(localStorage.getItem('theme') === 'false') {
    document.body.classList.add('dark-theme');
}
document.querySelector('.toggle').addEventListener('change', function () {
    let darkTheme = localStorage.getItem('theme') == 'false' ? false : true;
    localStorage.setItem('theme', !darkTheme)
    document.body.classList.toggle('dark-theme');
   
  });


const navigationItemsElement = document.querySelector('.header__navigation-items')

  const burger = document.getElementById('burger')

  burger.addEventListener('click', ()=>{
    navigationItemsElement.classList.toggle('active_menu')
    console.log(123)
  })