const burgerMenu = document.querySelector('header .fa-bars');

const closeMenu = document.querySelector('header .fa-times');

const menuList = document.querySelector('header ul');

const quitMenu = () => {
  menuList.style.display = 'none';
  burgerMenu.style.display = 'block';
  closeMenu.style.display = 'none';
};

const openMenu = () => {
  menuList.style.display = 'block';
  burgerMenu.style.display = 'none';
  closeMenu.style.display = 'block';
};

burgerMenu.addEventListener('click', openMenu);

closeMenu.addEventListener('click', quitMenu);