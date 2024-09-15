document.addEventListener('DOMContentLoaded', function () {
  fetch('/data/content.json')
    .then(response => response.json())
    .then(data => {
      // Actualizar el slider
      const swiperWrapper = document.querySelector('.swiper-wrapper');
      if (swiperWrapper) {
        swiperWrapper.innerHTML = ''; // Limpiar contenido previo
        data.hero.slides.forEach(slide => {
          const swiperSlide = document.createElement('div');
          swiperSlide.classList.add('swiper-slide');
          swiperSlide.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
            <div class="hero-content">
              <h1 class="title">${slide.title}</h1>
              <p>${slide.description}</p>
              <a href="#contact" class="cta-button">${slide.cta}</a>
            </div>
          `;
          swiperWrapper.appendChild(swiperSlide);
        });
      }

      // Actualizar características
      const featuresContainer = document.querySelector('.features');
      if (featuresContainer) {
        featuresContainer.innerHTML = ''; // Limpiar contenido previo
        data.features.forEach(feature => {
          const featureDiv = document.createElement('div');
          featureDiv.classList.add('feature');
          featureDiv.setAttribute('data-aos', 'fade-down');
          featureDiv.setAttribute('data-aos-easing', 'linear');
          featureDiv.setAttribute('data-aos-delay', '100');
          featureDiv.setAttribute('data-aos-offset', '0');
          featureDiv.innerHTML = `
            <img src="${feature.image}" alt="">
            <div class="feature-icon"><i class="material-icons">${feature.icon}</i></div>
            <div>
              <h4>${feature.title}</h4>
              <p>${feature.description}</p>
            </div>
          `;
          featuresContainer.appendChild(featureDiv);
        });
      }

      // Actualizar servicios
      const servicesContainer = document.querySelector('.features-container');
      if (servicesContainer) {
        servicesContainer.innerHTML = ''; // Limpiar contenido previo
        data.services.forEach(service => {
          const serviceDiv = document.createElement('div');
          serviceDiv.classList.add('feature-compani');
          serviceDiv.innerHTML = `
            <span class="material-symbols-outlined">${service.icon}</span>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          `;
          servicesContainer.appendChild(serviceDiv);
        });
      }

      // Actualizar proyectos
      const projectsContainer = document.querySelector('.project-gallery');
      if (projectsContainer) {
        projectsContainer.innerHTML = ''; // Limpiar contenido previo
        data.projects.forEach(project => {
          const projectDiv = document.createElement('div');
          projectDiv.classList.add('project-item');
          if (project.iframe) {
            projectDiv.innerHTML = `
              <iframe src="${project.iframe}" title="${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            `;
          } else {
            projectDiv.innerHTML = `
              <img src="${project.image}" alt="${project.title}">
              <h4>${project.title}</h4>
            `;
          }
          projectsContainer.appendChild(projectDiv);
        });
      }

      // Actualizar contacto
      const mapFrame = document.querySelector('#contact iframe');
      if (mapFrame) {
        mapFrame.src = data.contact.map;
      }

      const formImage = document.querySelector('.form-image img');
      if (formImage) {
        formImage.src = data.contact.image;
        document.querySelector('.form-image p').innerHTML = `
          Contáctenos<br>
          Nuestra dirección postal es:<br>
          ${data.contact.address}<br>
          Teléfono: ${data.contact.phone}
        `;
      }
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
});
