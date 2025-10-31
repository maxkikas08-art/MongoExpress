window.createNavbar = function() {
  const nav = document.createElement('nav');

  nav.innerHTML = `
    <div class="nav-top">
      Max's Website
    </div>

    <div class="nav-center">
      <input type="text" class="search-bar" placeholder="Search...">
      <div class="hamburger">&#9776;</div>
    </div>

    <div class="nav-links">
      <a href="#" onclick="window.loadPage('home')">Home</a>
      <a href="#" onclick="window.loadPage('feature1')">Feature 1</a>
      <a href="#" onclick="window.loadPage('feature2')">Feature 2</a>
      <img src="pfp.jpg" id="profilePicture" alt="Profile Picture"> <!-- Removed onclick handler -->
    </div>
  `;

  // Hamburger toggle for mobile
  const hamburger = nav.querySelector('.hamburger');
  const links = nav.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  return nav;
};

// Automatically add navbar to the page
document.getElementById('navbar').appendChild(window.createNavbar());
