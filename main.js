import { courses } from './courses.js';

const container = document.getElementById("courses-container");

courses.forEach(course => {
  const div = document.createElement("div");
  div.classList.add("course");
  div.innerHTML = `
    <img src="images/${course.image}" alt="${course.title}" />
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <p><strong>Duración:</strong> ${course.duration}</p>
    <p><strong>Modalidad:</strong> ${course.modality}</p>
    <p><strong>Valor:</strong> ${course.price}</p>
    <a href="https://wa.me/573004705079" target="_blank">
      <button>Agenda tu clase</button>
    </a>
  `;
  container.appendChild(div);
});
