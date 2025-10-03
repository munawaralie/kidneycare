document.addEventListener('DOMContentLoaded', function () {
  const menuList = document.getElementById('menuList');
  // Start collapsed
  menuList.style.maxHeight = '0px';

  window.toggleMenu = function () {
    // If collapsed (or not yet set)
    if (menuList.style.maxHeight === '0px' || menuList.style.maxHeight === '') {
      // Expand to its full scrollable height
      menuList.style.maxHeight = menuList.scrollHeight + 'px';
    } else {
      // Collapse
      menuList.style.maxHeight = '0px';
    }
  };
});
