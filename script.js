const projectDetails = {
  project1: "<h3>Strategic AI Prompting</h3><p>Detailed breakdown of ADDIE framework usage, prompt compilation tools, and measurable accuracy metrics.</p>",
  project2: "<h3>Claude Model Selection</h3><p>Analysis of token spend reduction, model tiers (Haiku vs Sonnet), and developer workflows.</p>"
};

function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = projectDetails[projectId] || "<p>Details coming soon.</p>";
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function handleFormSubmit(event) {
  event.preventDefault();
  alert("Thank you for reaching out! Your message has been recorded.");
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Toggle mobile menu state
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a nav item is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});