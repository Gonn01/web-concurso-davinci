window.onload = function () {
  const secciones = document.getElementById("secciones");

  let categorias = [
    {
      title: "Manga",
      description: "Todos los títulos que necesitas",
      img1: "imgs/manga1.png",
      img2: "imgs/manga2.png",
      img3: "imgs/manga3.png",
    },
    {
      title: "Novelas juveniles",
      description: "Todos los títulos de novela para adolescentes",
      img1: "imgs/novelas_juveniles1.png",
      img2: "imgs/novelas_juveniles2.png",
      img3: "imgs/novelas_juveniles3.png",
    },
    {
      title: "Bienestar personal",
      description: "Todos los títulos para bienestar personal",
      img1: "imgs/bienestar_personal1.png",
      img2: "imgs/bienestar_personal2.png",
      img3: "imgs/bienestar_personal3.png",
    },
  ];

  categorias.forEach((categoria, index) => {
    const seccion = document.createElement("section");
    const titulo = document.createElement("h2");
    const descripcion = document.createElement("p");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    seccion.classList.add(
      index % 2 === 0 ? "categoria-destacada" : "categoria-destacada-reverse"
    );

    titulo.classList.add("categoria-destacada-title");
    titulo.textContent = categoria.title;

    descripcion.classList.add("categoria-destacada-description");
    descripcion.textContent = categoria.description;

    const boton = document.createElement("div");
    boton.classList.add("boton-outlined");
    boton.textContent = "Ver más";

    img1.classList.add("categoria-destacada-item");
    img1.src = categoria.img1;
    img2.classList.add("categoria-destacada-item");
    img2.src = categoria.img2;
    img3.classList.add("categoria-destacada-item");
    img3.src = categoria.img3;

    const categoriaDescription = document.createElement("div");
    categoriaDescription.classList.add("categoria-description");
    categoriaDescription.appendChild(titulo);
    categoriaDescription.appendChild(descripcion);
    categoriaDescription.appendChild(boton);

    seccion.appendChild(categoriaDescription);
    seccion.appendChild(img1);
    seccion.appendChild(img2);
    seccion.appendChild(img3);
    secciones.appendChild(seccion);
  });
};
