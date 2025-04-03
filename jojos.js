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


// Lista de las URLs de las fotos (puedes cambiar estas rutas por tus imágenes)
const photos = [
    'img/3jojos.png',
    'img/4jojos.png',
    'img/1.jpg',
    'img/2jojos.png',
    'img/12.jpg',
    'img/9jojos.png',
    'img/13.jpg',
    'img/6.jpg',
    'img/10.jpg'
];

// Variable para llevar el control de la foto actual
let currentPhotoIndex = 0;

// Función para mostrar la foto
function showPhoto(index) {
    const photoElement = document.getElementById('photo');
    photoElement.src = photos[index];
}

// Función para cambiar automáticamente la foto cada 10 segundos
function autoChangePhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length; // Avanza a la siguiente foto, vuelve a la primera si se alcanza la última
    showPhoto(currentPhotoIndex);
}

// Configura el cambio automático de foto cada 10 segundos
setInterval(autoChangePhoto, 10000); // 10000 ms = 10 segundos

// Función para cambiar a la siguiente foto al hacer clic en el botón "Next"
document.getElementById('next-photo').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length; // Cambia a la siguiente foto
    showPhoto(currentPhotoIndex);
});

// Inicializa la primera foto al cargar la página
window.onload = () => {
    showPhoto(currentPhotoIndex);
};



// Lista de eventos con imágenes y descripciones
const calendarEvents = [
    { image: 'img/Noviasjojos.png', note: 'Nos hicimos novias<br>02-01-2025' },
    { image: 'img/SanValentinjojos.jpg', note: 'San Valentín<br>14-02-2025' },
    { image: 'img/sushi jojos.png', note: 'Primer Date<br>06-12-2024' },
    { image: 'img/nosconocimosjojos.png', note: 'Nos Conocimos(la ia me odia)<br>13-10-2024' },
];

let currentIndex1 = 0;
let currentIndex2 = 1; // La segunda imagen empieza con la siguiente

const eventImg1 = document.getElementById('event-img-1');
const eventDescription1 = document.getElementById('event-description-1');
const eventImg2 = document.getElementById('event-img-2');
const eventDescription2 = document.getElementById('event-description-2');
const nextEventButton = document.getElementById('next-event');

// Función para cambiar ambas imágenes
function updateEvents() {
    currentIndex1 = (currentIndex1 + 2) % calendarEvents.length;
    currentIndex2 = (currentIndex2 + 2) % calendarEvents.length;

    eventImg1.src = calendarEvents[currentIndex1].image;
    eventDescription1.innerHTML = calendarEvents[currentIndex1].note;

    eventImg2.src = calendarEvents[currentIndex2].image;
    eventDescription2.innerHTML = calendarEvents[currentIndex2].note;
}

// Cambiar imágenes automáticamente cada 10 segundos
setInterval(updateEvents, 10000);

// Cambiar imágenes manualmente con el botón
nextEventButton.addEventListener('click', updateEvents);

// Obtenemos el elemento de audio
let audioPlayer = new Audio();

// Función para cambiar la canción
function changeSong(songSrc) {
    audioPlayer.src = songSrc;
    audioPlayer.play(); // Reproduce la canción al cambiar
}

// Función para controlar la reproducción
function togglePlayPause(button) {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// Obtén todos los botones de reproducción
const playPauseButtons = document.querySelectorAll('.play-pause');

// Asignar un evento de clic a cada botón
playPauseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const songButton = event.target.previousElementSibling; // Obtén el botón de la canción
        const songSrc = songButton.dataset.src; // Obtén la ruta del archivo de la canción
        changeSong(songSrc); // Cambia la canción

        // Cambia la funcionalidad del botón a Play/Pause
        togglePlayPause(button);
    });
});

// EventListener para cada botón de canción
const songButtons = document.querySelectorAll('.song');
songButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const songSrc = event.target.dataset.src; // Obtén la fuente de la canción
        changeSong(songSrc); // Cambia la canción
    });
});


//TEMAAAAs
function changeTheme(index) {
    window.location.href = index + ".html"; // Redirige a la vista correspondiente
}

