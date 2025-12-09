import './style.css'


if(localStorage.getItem('theme') === 'false') {
    document.body.classList.add('dark-theme');
}
document.querySelector('.toggle').addEventListener('change', function () {
    let darkTheme = localStorage.getItem('theme') == 'false' ? false : true;
    localStorage.setItem('theme', !darkTheme)
    document.body.classList.toggle('dark-theme');
   
  });

