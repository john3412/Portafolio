const typed = new Typed ('.typed', {
  strings: [
    'Ingeniero en computación', 
    'Bienvenido a mi portafolio'
  ],
  typeSpeed: 50,
  starDelay: 300,
  backSpeed: 30,
  loop: true
});

const datos = {
  nombre: '',
  telefono: '',
  email: '',
  mensaje: ''
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  //Validando el formulario

  const {nombre, telefono, email, mensaje} = datos;

  if (nombre === '' || telefono === '' || email === '' || mensaje === '') {
    mostrarAlerta('Todos los campos son obligatorios', true);

    return;
  }
  mostrarAlerta('Tus datos han sido enviados correctamente');
})

function leerTexto (e) {
  datos[e.target.id] = e.target.value; //cuando ocurre un evento ('e') en un elemento (típicamente alguna forma de campo de entrada) 
} // que tiene un 'id', esta función registra el id y el valor del elemento dentro de un objeto de datos ('datos' ).

function mostrarAlerta (message, error = null) {
  const alerta = document.createElement('P');
  alerta.textContent = message;

  if (error) {
    alerta.classList.add('error');
  } else {
    alerta.classList.add('correcto');
  }

  formulario.appendChild(alerta);

  setTimeout (() => {
    alerta.remove();
  }, 2000)
}

// Carousel 

const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let scrollLeft;

prevButton.addEventListener("click", () => {
  scrollLeft = carousel.scrollLeft;
  carousel.scrollTo({
    left: scrollLeft - carousel.offsetWidth,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  scrollLeft = carousel.scrollLeft;
  carousel.scrollTo({
    left: scrollLeft + carousel.offsetWidth,
    behavior: "smooth",
  });
});