import arrayMenu from './menu.json';
import itemTemplate from './templates/menu-item.hbs';
import refs from './js/refs';
const { menuRef, checkboxRef, bodyRef } = refs;

//Шаблонизация
const markup = itemTemplate(arrayMenu);
menuRef.insertAdjacentHTML('beforeend', markup);

// Список тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function switchTheme(e) {
   if (e.target.checked) {
    // bodyRef.classList.remove(Theme.LIGHT);
    // bodyRef.classList.add(Theme.DARK);
     bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
   }
   else {
      // bodyRef.classList.remove(Theme.DARK);
      // bodyRef.classList.add(Theme.LIGHT);
     bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
   }   
}
checkboxRef.addEventListener("change", switchTheme)

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  bodyRef.classList.add(currentTheme);
  
  if (currentTheme === Theme.DARK) {
    checkboxRef.checked = true;
  }
}
else {
  bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}
























