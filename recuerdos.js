// Módulo de cartas interactivas

// En este ejemplo se puede agregar lógica dinámica si lo desea.
// Por ejemplo: cargar las cartas desde un array de objetos.

const cartasData = [
  {
    titulo: "Día Especial",
    img: "img1.jpg",
    fecha: "14 de Febrero",
    nota: "Nuestro primer San Valentín 💜"
  },
  {
    titulo: "Aventura",
    img: "img2.jpg",
    fecha: "Viaje a la playa",
    nota: "El día que vimos medusas brillando en la orilla 🌊✨"
  },
  {
    titulo: "Recuerdo",
    img: "img3.jpg",
    fecha: "Noche mágica",
    nota: "La primera vez que bailamos bajo la lluvia 🌧️💃"
  },
  {
    titulo: "Recuerdo",
    img: "img3.jpg",
    fecha: "Noche mágica",
    nota: "La primera vez que bailamos bajo la lluvia 🌧️💃"
  },
  {
    titulo: "Recuerdo",
    img: "img3.jpg",
    fecha: "Noche mágica",
    nota: "La primera vez que bailamos bajo la lluvia 🌧️💃"
  }
];

// 🔮 (Opcional) Generar las cartas dinámicamente
const container = document.querySelector(".cartas-container");
if (container) {
  container.innerHTML = ""; // limpiar contenido inicial
  cartasData.forEach(carta => {
    const div = document.createElement("div");
    div.classList.add("carta");
    div.innerHTML = `
      <div class="carta-inner">
        <div class="carta-front">
          <img src="${carta.img}" alt="${carta.titulo}">
          <h2>${carta.titulo}</h2>
        </div>
        <div class="carta-back">
          <h3>${carta.fecha}</h3>
          <p>${carta.nota}</p>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  //TEMAAAAAAAAAAAS
  function changeTheme(index) {
    window.location.href = index + ".html"; // Redirige a la vista correspondiente
  }
  function changeTheme(jojos) {
    window.location.href = jojos + ".html"; // Redirige a la vista correspondiente
  }
  function changeTheme(animales) {
    window.location.href = animales + ".html"; // Redirige a la vista correspondiente
  }




}
