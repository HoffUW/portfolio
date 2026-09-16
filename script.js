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
