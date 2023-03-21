//AVISO RENDIMIENTO

alert( 'Atención: No realizar zoom-out más allá del 50%: potencialmente problemas de rendimiento.' );

//AVISO RENDIMIENTO



//BRILLO LINKS 

const links = document.querySelectorAll(".hover-link");

//Por cada link que tenga la clase
links.forEach(link => {

  //Listener para cuando el puntero está encima
  link.addEventListener("mouseover", () => {
    link.style.color = "lightblue";
    link.style.textDecoration = "underline";
  });

//Listener para cuando saco el puntero
  link.addEventListener("mouseout", () => {
    link.style.color = "";
    link.style.textDecoration = "";
  });
});

//BRILLO LINKS 



//BOTÓN DARK MODE

//Defino las constantes que necesito
const dark_switch = document.querySelector('#dark_switch');
const body = document.querySelector('body');
const icon = dark_switch.querySelector('i');
// Recupera el estado del modo oscuro desde el Local Storage
const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';


//Defino el comportamiento si el modo oscuro está activado
if (darkModeEnabled) {
  body.classList.add('dark-mode');
  dark_switch.classList.remove('title')
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}
// Listener al click del botón
dark_switch.addEventListener('click', () => {

  // Agrego función de alternancia para body, para la clase que contiene los estilos
  body.classList.toggle('dark-mode');

  //Booleano: Si tiene la clase .dark-mode; reemplaza el ícono fa-moon por fa-sun, y declara en localStorage que está en modo nocturno
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('darkModeEnabled', 'true');
  //Caso contrario: reemplaza fa-sun por fa-moon, y declara en localStorage que no está en modo nocturno.
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('darkModeEnabled', 'false');
  }
});

//BOTÓN DARK MODE

//BOTÓN CERTIFICADOS

//Defino constantes que necesito
const popupButton = document.querySelector('#popup_button');
const popupContent = document.querySelector('#popup_content');
const popupClose = document.querySelector('#popup_close');
//Listener al click
popupButton.addEventListener('click', () => {
  //Originalmente el cuadro emergente tiene display=none
  popupContent.style.display = 'block';
});
//Listener para botón cerrar
popupClose.addEventListener('click', () => {
  //Vuelve a su estado original
  popupContent.style.display = 'none';
});

//BOTÓN CERTIFICADOS

