//CAROUSEL

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.prev') && slider.append(items[0])
  e.target.matches('.next') && slider.prepend(items[items.length-1]);
  
}
document.addEventListener('click',activate,false,);




  var menuButton = document.getElementById('menuBtn');
  var sidebar = document.getElementById('sidebar');
  var closeMenu = document.getElementById('menuClose')
  var arrow= document.getElementById("arrowDown")

  menuButton.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar-open');
  });

  closeMenu.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-open');
});

arrow.addEventListener('click', function () {
  mini-sidebar.classList.toggle('mini-sidebar-open');
});

arrow.addEventListener('click', function () {
mini-sidebar.classList.toggle('mini-sidebar-open');
});


