const navItems = document.querySelectorAll('.sidebar li');
const frame = document.getElementById('main-frame');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');
    if(page){
      frame.src = 'pages/' + page;
    }
  });
});
