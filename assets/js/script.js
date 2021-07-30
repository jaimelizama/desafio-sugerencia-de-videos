class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }
  setInicio() {
    console.log(`“Este método es para realizar un cambio en la URL del video`);
  }
}

class Reproductor extends Multimedia {
  constructor(urlMultimedia, id) {
    super(urlMultimedia);
    this.id = id;
  }

  setInicio(tiempo) {
    this._url += `?start=${tiempo}`;
  }
  playMultimedia() {
    const iframe = document.querySelector(this.id);
    iframe.setAttribute("src", this.url);
  }
}

const iframeMusica = document.querySelector("#musica");
const iframePelicula = document.querySelector("#peliculas");
const iframeSerie = document.querySelector("#series");

// Música: https://www.youtube.com/watch?v=t-E1SaDrHJQ
// Película: https://www.youtube.com/embed/kVrqfYjkTdQ
// Serie: https://www.youtube.com/embed/MfvvhM6IJS0

const Musica = new Reproductor(
  "https://www.youtube.com/embed/bEQtkLNTmRs",
  "#musica"
);
const Peliculas = new Reproductor(
  "https://www.youtube.com/embed/kVrqfYjkTdQ",
  "#peliculas"
);
const Series = new Reproductor(
  "https://www.youtube.com/embed/MfvvhM6IJS0",
  "#series"
);

// Musica.playMultimedia();
// Peliculas.playMultimedia();
// Series.playMultimedia();

const collapseOneElement = document.querySelector("#headingOne");
collapseOneElement.addEventListener("click", function () {
  Musica.playMultimedia();
});

const collapseTwoElement = document.querySelector("#headingTwo");
collapseTwoElement.addEventListener("click", function () {
  Peliculas.setInicio(10);
  Peliculas.playMultimedia();
});

const collapseThreeElement = document.querySelector("#headingThree");
collapseThreeElement.addEventListener("click", function () {
  Series.playMultimedia();
});
