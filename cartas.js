// Función para mostrar/ocultar acordeón de años y cartas
document.addEventListener("DOMContentLoaded", () => {
    const yearHeaders = document.querySelectorAll(".year-header");
    const letterHeaders = document.querySelectorAll(".letter-header");

    // Toggle de años
    yearHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector(".arrow");

            if (content.style.display === "block") {
                content.style.display = "none";
                arrow.textContent = "→";
            } else {
                content.style.display = "block";
                arrow.textContent = "↓";
            }
        });
    });

    // Toggle de cartas + animación palabra por palabra
    letterHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector(".arrow");
            const textElement = content.querySelector("p");

            if (content.style.display === "block") {
                content.style.display = "none";
                arrow.textContent = "→";
            } else {
                // Reiniciar contenido para animación
                const fullText = textElement.textContent.trim();
                const words = fullText.split(" ");
                textElement.textContent = "";

                let i = 0;
                function showWord() {
                    if (i < words.length) {
                        textElement.textContent += (i > 0 ? " " : " ") + words[i];
                        i++;
                        setTimeout(showWord, 30); // velocidad
                    }
                }

                content.style.display = "block";
                arrow.textContent = "↓";
                showWord();
            }
        });
    });

});

//TEMAAAAs
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

