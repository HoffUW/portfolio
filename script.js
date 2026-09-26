const projectDetails = {
  // Project 1: LMS Redesign
  project1: `
    <div class="cs-header">
      <span class="cert-badge">Case Study</span>
      <h2 class="cs-title">LMS Redesign: Learn at ACGME</h2>
      <p class="cs-subtitle">Accreditation Council for Graduate Medical Education</p>
    </div>

    <!-- Quick Stats Grid -->
    <div class="cs-stats-grid">
      <div class="cs-stat-item">
        <strong>Role</strong>
        <span>Manager, Learning Technologies</span>
      </div>
      <div class="cs-stat-item">
        <strong>Scope</strong>
        <span>Enterprise Platform Overhaul</span>
      </div>
      <div class="cs-stat-item">
        <strong>Audience</strong>
        <span>GME Physicians & Educators</span>
      </div>
    </div>

    <!-- Challenge Section -->
    <div class="cs-section">
      <h3>The Challenge</h3>
      <p>
        Learn at ACGME serves as the central educational hub for graduate medical education professionals across the nation. The legacy system suffered from fragmented content organization, limited mobile responsiveness, and rigid navigation, making it difficult for busy physicians to discover key learning materials efficiently.
      </p>
    </div>

    <!-- Objectives Section -->
    <div class="cs-section">
      <h3>Key Objectives</h3>
      <ul class="cs-list">
        <li>Modernize the UI/UX for a clean, accessible, and mobile-friendly experience.</li>
        <li>Streamline content discovery by reorganizing learning pathways and topic hubs.</li>
        <li>Integrate high-production educational videos and podcasts into structured courses.</li>
        <li>Establish analytics tracking to evaluate usage, completion metrics, and user engagement.</li>
      </ul>
    </div>

    <!-- Solution Section -->
    <div class="cs-section">
      <h3>The Solution & Implementation</h3>
      <p>
        Leading the redesign initiative, I collaborated with clinical SMEs, committee members, and technical teams to restructure the platform layout around user workflows and adult learning principles:
      </p>
      <ul class="cs-list">
        <li><strong>Structured Learning Pathways:</strong> Designed intuitive course hierarchies so users can progress seamlessly through accreditation-aligned activities.</li>
        <li><strong>Multimedia Integration:</strong> Directly embedded studio-produced video modules and podcast series with interactive transcripts and downloadable reference guides.</li>
        <li><strong>Data-Driven Analytics:</strong> Configured event tracking and custom dashboards to provide real-time visibility into product performance and learner outcomes.</li>
      </ul>
    </div>

    <!-- Outcomes / Impact Box -->
    <div class="cs-section cs-highlight-box">
      <h3>Impact & Outcomes</h3>
      <ul class="cs-list">
        <li>Improved platform usability, accessibility, and navigation across mobile and desktop devices.</li>
        <li>Enhanced content engagement through structured video/audio learning paths.</li>
        <li>Provided leadership with actionable analytics to drive future learning roadmap decisions.</li>
      </ul>
    </div>

    <!-- Live Site Button -->
    <div style="margin-top: 1.5rem; text-align: center;">
      <a href="https://dl.acgme.org" target="_blank" rel="noopener noreferrer" class="btn" style="display: inline-block; text-decoration: none; width: 100%;">
        Visit Learn at ACGME &rarr;
      </a>
    </div>
  `,

  // Project 2: Faculty Development Toolkit
  project2: `
    <div class="cs-header">
      <span class="cert-badge">Case Study</span>
      <h2 class="cs-title">Faculty Development Toolkit</h2>
      <p class="cs-subtitle">Accreditation Council for Graduate Medical Education</p>
    </div>

    <!-- Quick Stats Grid -->
    <div class="cs-stats-grid">
      <div class="cs-stat-item">
        <strong>Role</strong>
        <span>Media Production Specialist / ID</span>
      </div>
      <div class="cs-stat-item">
        <strong>Scope</strong>
        <span>Interactive Web Ecosystem</span>
      </div>
      <div class="cs-stat-item">
        <strong>Audience</strong>
        <span>Physician Educators & Clinical Leaders</span>
      </div>
    </div>

    <!-- Challenge Section -->
    <div class="cs-section">
      <h3>The Challenge</h3>
      <p>
        Physician educators required accessible, practical tools to evaluate resident progress, conduct meaningful assessments, and deliver constructive feedback. Existing materials were static slide decks and lengthy PDFs, which hindered engagement and made just-in-time application in busy clinical settings difficult.
      </p>
    </div>

    <!-- Objectives Section -->
    <div class="cs-section">
      <h3>Key Objectives</h3>
      <ul class="cs-list">
        <li>Transition static workshops into a dynamic, web-based digital toolkit accessible on demand.</li>
        <li>Create modular, bite-sized learning assets that faculty members can digest quickly between clinical duties.</li>
        <li>Embed multimedia demonstrations showing effective feedback models and evaluation strategies in action.</li>
        <li>Provide downloadable, actionable frameworks and templates for immediate workplace application.</li>
      </ul>
    </div>

    <!-- Solution Section -->
    <div class="cs-section">
      <h3>The Solution & Implementation</h3>
      <p>
        I designed and developed an interactive learning hub that transformed complex assessment methodologies into actionable digital resources:
      </p>
      <ul class="cs-list">
        <li><strong>Interactive Learning Modules:</strong> Built self-paced, web-native components breaking down key faculty competencies and evaluation frameworks.</li>
        <li><strong>Video & Case Demonstration:</strong> Produced scenario-based video demonstrations featuring clinician educators modeling effective feedback techniques.</li>
        <li><strong>Resource Repository:</strong> Curated downloadable discussion guides, rubrics, and implementation toolkits optimized for desktop and mobile viewing.</li>
      </ul>
    </div>

    <!-- Outcomes / Impact Box -->
    <div class="cs-section cs-highlight-box">
      <h3>Impact & Outcomes</h3>
      <ul class="cs-list">
        <li>Successfully replaced static presentation decks with a scalable, interactive learning ecosystem.</li>
        <li>Expanded national reach and adoption among GME program directors and faculty members.</li>
        <li>Standardized feedback and evaluation practices across graduate medical education programs.</li>
      </ul>
    </div>

    <!-- Live Site Button -->
    <div style="margin-top: 1.5rem; text-align: center;">
      <a href="https://dl.acgme.org/pages/acgme-faculty-development-toolkit-improving-assessment-using-direct-observation" target="_blank" rel="noopener noreferrer" class="btn" style="display: inline-block; text-decoration: none; width: 100%;">
        Explore the Faculty Development Toolkit &rarr;
      </a>
    </div>
  `
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
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when a nav item is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close modal when clicking on backdrop
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

});


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


