function cambiarVisibilidadSeccionesMovil() {
  const projects = document.getElementById("projects");
  const experience = document.getElementById("experience");

  projects.classList.toggle("show-mobile");
  experience.classList.toggle("show-mobile");
}

function mostrarProjectsClick(event) {
  event.preventDefault();

  if (window.innerWidth <= 768) {
    cambiarVisibilidadSeccionesMovil();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }
}

function regresarHomeClick(event) {
  event.preventDefault();

  if (window.innerWidth <= 768) {
    const projects = document.getElementById("projects");
    const experience = document.getElementById("experience");

    projects.classList.remove("show-mobile");
    experience.classList.remove("show-mobile");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
