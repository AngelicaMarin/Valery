// Fecha de inicio: 2 de enero de 2025
const startDate = new Date('2025-01-02T00:00:00');

// Función para actualizar el cronómetro
function updateTimer() {
    const now = new Date(); // Obtiene la fecha actual
    const elapsedTime = now - startDate; // Calcula el tiempo transcurrido en milisegundos

    // Convierte el tiempo transcurrido a días, horas, minutos y segundos
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Actualiza el contenido del cronómetro en los elementos correspondientes
    document.getElementById('days').textContent = String(days).padStart(4, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Llama a la función `updateTimer` cada segundo para actualizar el cronómetro
setInterval(updateTimer, 1000);

const gallery = document.querySelector('.gallery-container');

// Lista con los nombres exactos de las imágenes
const imageNames = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '7.jpeg',
    '8g.jpeg',
    '9.jpeg',
    '10.jpeg'
    // Agregá aquí todos los nombres que tengas...
];

const basePath = 'img/nosotras/';

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


function changeTheme(index) {
    window.location.href = index + ".html"; // Redirige a la vista correspondiente
}
function changeTheme(jojos) {
    window.location.href = jojos + ".html"; // Redirige a la vista correspondiente
}
function changeTheme(animales) {
    window.location.href = animales + ".html"; // Redirige a la vista correspondiente
}
function changeTheme(cartas) {
    window.location.href = cartas + ".html"; // Redirige a la vista correspondiente
}



