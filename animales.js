const gallery = document.querySelector('.gallery-container');

// Lista con los nombres exactos de las imágenes
const imageNames = [
  'gato1.jpg',
  'gato2.jpg',
  'jason1.jpg',
  'gato3.jpg',

  'krippy1.jpg',
  'sukini1.jpg',
  'nana1.jpg',
  'martin.jpg',

  'gato4.jpg',
  'gato5.jpg',
  'jason2.jpg',
  'krippy2.jpg',


  // Agregá aquí todos los nombres que tengas...
];

const basePath = 'img/animales/';

imageNames.forEach(name => {
  const img = document.createElement('img');
  img.src = `${basePath}${name}`;
  img.alt = name.split('.')[0]; // Para accesibilidad

  img.onerror = () => {
    console.warn(`No se pudo cargar la imagen: ${name}`);
    img.remove();
  };

  gallery.appendChild(img);
});


//TEMAAAAs
function changeTheme(index) {
    window.location.href = index + ".html"; // Redirige a la vista correspondiente
}

function changeTheme(jojos) {
    window.location.href = jojos + ".html"; // Redirige a la vista correspondiente
}


