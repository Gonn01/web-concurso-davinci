async function getCategoriasDestacadas() {

    try {
        const response = await fetch('./functions/getCategoriasDestacadas.php');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function generarCategoriasDestacadas(categoriasDestacadas) {
    const secciones = document.getElementById("secciones");
    for (let index = 0; index < categoriasDestacadas.length; index++) {
        const carouselName = `carouselDestacadas${index}`;
        const categoria = categoriasDestacadas[index];
        // Creo el container de cada categoria y le agrego las clases
        const container = document.createElement("div");
        container.classList.add("container-fluid", "mx-auto", "p-0");

        // Creo la row de cada categoria y le agrego las clases
        const row = document.createElement("div");
        row.classList.add(
            "row",
            "categoria-destacada",
            "categoria-responsive",
            categoria.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
        );
        row.style.backgroundColor = categoria.color;

        // Creo la columna del titulo, descripcion y boton de cada categoria
        const datos = document.createElement("div");
        datos.classList.add("col", "my-auto", "col-responsive");

        // Creo un wrapper que contiene el titulo, descripcion y boton
        const datosWrapper = document.createElement("div");
        datosWrapper.classList.add("categoria-description");

        // Creo el titulo de la categoria y le agrego las clases y el contenido
        // y lo agrego al wrapper
        const title = document.createElement("h2");
        title.classList.add("categoria-destacada-title");
        title.textContent = categoria.nombre;
        datosWrapper.appendChild(title);

        // Creo la descripcion de la categoria y le agrego las clases y el contenido
        // y lo agrego al wrapper
        const description = document.createElement("p");
        description.classList.add("categoria-destacada-description");
        description.textContent = categoria.description;
        datosWrapper.appendChild(description);

        // Creo el boton de la categoria y le agrego las clases y el contenido
        // y lo agrego al wrapper
        const boton = document.createElement("a");
        boton.classList.add("boton-outlined");
        boton.id = `btn-ver-mas`;
        boton.textContent = "VER MÁS";
        boton.href = './libros.php'
        boton.style.color = 'white';
        boton.style.backgroundColor = '#005735';

        datosWrapper.appendChild(boton);

        const espacio = document.createElement("div");
        espacio.style.height = "30px";
        datosWrapper.appendChild(espacio);

        // Agrego el wrapper al contenedor de datos
        datos.appendChild(datosWrapper);

        // Agrego la columna de datos a la row
        row.appendChild(datos);

        // Por cada imagen de la categoria, creo una columna y una imagen
        // y la agrego a la row
        categoria.images.forEach((element) => {
            // Creo la columna de la imagen
            const col = document.createElement("div");
            col.classList.add("col", "col-responsive", "cat-dest");


            // Creo la imagen
            const img = document.createElement("img");
            img.src = element;
            img.alt = element;
            img.classList.add("categoria-destacada-item", "image-i");
            img.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";

            // Agrego la imagen a la columna
            col.appendChild(img);

            // Agrego la columna a la row
            row.appendChild(col);
        });

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add("svg");
        svg.setAttribute("width", "1920");
        svg.setAttribute("height", "99");
        svg.setAttribute("viewBox", "0 0 1920 99");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.setAttribute("version", "1.1");
        svg.setAttribute("preserveAspectRatio", "none");

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", 0);
        rect.setAttribute("y", 0);
        rect.setAttribute("width", 1920);
        rect.setAttribute("height", 99);

        rect.setAttribute(
            "fill",
            index == 0 ? "white" : categoriasDestacadas[index - 1].color
        );

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute(
            "d",
            "M0 32L21.4 35.5C42.6 39 85.4 46 128 46.8C170.6 47.7 213.4 42.3 256 40C298.6 37.7 341.4 38.3 384 41.2C426.6 44 469.4 49 512 45.7C554.6 42.3 597.4 30.7 640 26.7C682.6 22.7 725.4 26.3 768 32.3C810.6 38.3 853.4 46.7 896 49.2C938.6 51.7 981.4 48.3 1024 41.8C1066.6 35.3 1109.4 25.7 1152 25.3C1194.6 25 1237.4 34 1280 37.3C1322.6 40.7 1365.4 38.3 1408 33.2C1450.6 28 1493.4 20 1536 18.7C1578.6 17.3 1621.4 22.7 1664 23.5C1706.6 24.3 1749.4 20.7 1792 16C1834.6 11.3 1877.4 5.69999 1898.6 2.79999L1920 0V99H1898.6C1877.4 99 1834.6 99 1792 99C1749.4 99 1706.6 99 1664 99C1621.4 99 1578.6 99 1536 99C1493.4 99 1450.6 99 1408 99C1365.4 99 1322.6 99 1280 99C1237.4 99 1194.6 99 1152 99C1109.4 99 1066.6 99 1024 99C981.4 99 938.6 99 896 99C853.4 99 810.6 99 768 99C725.4 99 682.6 99 640 99C597.4 99 554.6 99 512 99C469.4 99 426.6 99 384 99C341.4 99 298.6 99 256 99C213.4 99 170.6 99 128 99C85.4 99 42.6 99 21.4 99H0V32Z"
        );
        path.setAttribute("fill", categoria.color);
        svg.appendChild(rect);
        svg.appendChild(path);

        container.appendChild(svg);
        // Agrego la row al container
        container.appendChild(row);

        const carousel = document.createElement('div');
        carousel.classList.add('carousel', 'carousel2');
        carousel.style.backgroundColor = categoria.color;
        carousel.classList.add('slide');
        ///
        carousel.setAttribute('id', carouselName);

        const indicators = document.createElement('div');
        indicators.classList.add('carousel-indicators');

        for (let indexa = 0; indexa < categoria.images.length; indexa++) {
            const indicator = document.createElement('button');
            indicator.classList.add('carousel-indicator');
            indicator.setAttribute('data-bs-target', `#${carouselName}`);
            indicator.setAttribute('data-bs-slide-to', indexa);
            indicator.setAttribute('type', 'button');

            if (indexa === 0) {
                indicator.classList.add('active');
            }
            indicators.appendChild(indicator);
        }

        carousel.appendChild(indicators);

        const inner = document.createElement('div');
        inner.classList.add('carousel-inner');

        categoria.images.forEach((img, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item', 'image-i', 'text-center');
            item.classList.add('text-center');
            item.style.backgroundColor = categoria.color;
            if (index === 0) {
                item.classList.add('active');
            }

            const imgElement = document.createElement('img');
            imgElement.src = img;
            item.appendChild(imgElement);

            inner.appendChild(item);
        });

        carousel.appendChild(inner);

        const prevButton = document.createElement('button');
        prevButton.classList.add('carousel-control-prev');
        prevButton.setAttribute('type', 'button');
        prevButton.setAttribute('data-bs-target', `#${carouselName}`);
        prevButton.setAttribute('data-bs-slide', 'prev');

        const prevIcon = document.createElement('span');
        prevIcon.classList.add('carousel-control-prev-icon');
        prevIcon.setAttribute('aria-hidden', 'true');
        prevButton.appendChild(prevIcon);

        const prevLabel = document.createElement('span');
        prevLabel.classList.add('visually-hidden');
        prevLabel.textContent = 'Previous';
        prevButton.appendChild(prevLabel);

        carousel.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.classList.add('carousel-control-next');
        nextButton.setAttribute('type', 'button');
        nextButton.setAttribute('data-bs-target', `#${carouselName}`);
        nextButton.setAttribute('data-bs-slide', 'next');

        const nextIcon = document.createElement('span');
        nextIcon.classList.add('carousel-control-next-icon');
        nextIcon.setAttribute('aria-hidden', 'true');
        nextButton.appendChild(nextIcon);

        const nextLabel = document.createElement('span');
        nextLabel.classList.add('visually-hidden');
        nextLabel.textContent = 'Next';
        nextButton.appendChild(nextLabel);

        carousel.appendChild(nextButton);

        container.appendChild(carousel);
        if (index == categoriasDestacadas.length - 1) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.classList.add("svg");
            svg.setAttribute("width", "1920");
            svg.setAttribute("height", "99");
            svg.setAttribute("viewBox", "0 0 1920 99");
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
            svg.setAttribute("version", "1.1");
            svg.setAttribute("preserveAspectRatio", "none");

            const rect = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect"
            );
            rect.setAttribute("x", 0);
            rect.setAttribute("y", 0);
            rect.setAttribute("width", 1920);
            rect.setAttribute("height", 99);

            rect.setAttribute("fill", "white");

            const path = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            path.setAttribute(
                "d",
                "M0 32L21.4 35.5C42.6 39 85.4 46 128 46.8C170.6 47.7 213.4 42.3 256 40C298.6 37.7 341.4 38.3 384 41.2C426.6 44 469.4 49 512 45.7C554.6 42.3 597.4 30.7 640 26.7C682.6 22.7 725.4 26.3 768 32.3C810.6 38.3 853.4 46.7 896 49.2C938.6 51.7 981.4 48.3 1024 41.8C1066.6 35.3 1109.4 25.7 1152 25.3C1194.6 25 1237.4 34 1280 37.3C1322.6 40.7 1365.4 38.3 1408 33.2C1450.6 28 1493.4 20 1536 18.7C1578.6 17.3 1621.4 22.7 1664 23.5C1706.6 24.3 1749.4 20.7 1792 16C1834.6 11.3 1877.4 5.69999 1898.6 2.79999L1920 0V99H1898.6C1877.4 99 1834.6 99 1792 99C1749.4 99 1706.6 99 1664 99C1621.4 99 1578.6 99 1536 99C1493.4 99 1450.6 99 1408 99C1365.4 99 1322.6 99 1280 99C1237.4 99 1194.6 99 1152 99C1109.4 99 1066.6 99 1024 99C981.4 99 938.6 99 896 99C853.4 99 810.6 99 768 99C725.4 99 682.6 99 640 99C597.4 99 554.6 99 512 99C469.4 99 426.6 99 384 99C341.4 99 298.6 99 256 99C213.4 99 170.6 99 128 99C85.4 99 42.6 99 21.4 99H0V32Z"
            );
            path.setAttribute("fill", categoria.color);
            svg.appendChild(rect);
            svg.appendChild(path);
            svg.style.transform = "rotate(180deg)";
            container.appendChild(svg);
        }

        // Agrego el container a la seccion
        secciones.appendChild(container);
    }
}
let categoriasDestacadas = await getCategoriasDestacadas();
generarCategoriasDestacadas(categoriasDestacadas);