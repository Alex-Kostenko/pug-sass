const handlerToogleMenu = function(user) {
  "use strict";

  var navbar = document.getElementById('menu');
  var icon = document.getElementById('open');
  var content = document.getElementById('content');

  const onToogleMenu = () => {
    navbar.classList.toggle('menu-show');
    content.classList.toggle('close-content');
  };

  icon.addEventListener('click', onToogleMenu);
  icon.addEventListener('touch', onToogleMenu);
};

handlerToogleMenu();
