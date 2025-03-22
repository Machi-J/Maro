// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Your skin", time: 3 },
  { text: "Oh, yeah, your skin and bones", time: 4 },
  { text: "Turn into something beautiful", time: 10 },
  { text: "Do you know", time: 12 },
  { text: "You know I love you so?", time: 15 },
  { text: "You know I love you so?", time: 23 },

  { text: "I swam across", time: 48 },
  { text: "I jumped across for you", time: 50 },
  { text: "Oh, what a thing to do", time: 54 },
  { text: "Cause you were all yellow", time: 59 },

  { text: "I drew a line", time: 62 },
  { text: "I drew a line for you", time: 64 },
  { text: "Oh, what a thing to do", time: 65 },
  { text: "And it was all yellow", time: 68 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);