// This function loads the correct page based on the 'page' argument
window.loadPage = function(page) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear previous content

  // Dynamically load the necessary content for the page
  switch(page) {
    case 'home':
      window.loadHome();
      break;
    case 'feature1':
      window.loadFeature1();
      break;
    case 'feature2':
      window.loadFeature2();
      break;
    case 'contact':
      window.loadContact();
      break;
    default:
      window.loadHome();
      break;
  }

  // Dynamically load the JavaScript for the corresponding page
  loadScript(page);
};

// This function dynamically loads the corresponding script based on the page argument
function loadScript(page) {
  const scriptTag = document.createElement('script');
  
  switch(page) {
    case 'home':
      scriptTag.src = 'home.js';
      break;
    case 'feature1':
      scriptTag.src = 'feature1.js';
      break;
    case 'feature2':
      scriptTag.src = 'feature2.js';
      break;
    case 'contact':
      scriptTag.src = 'contact.js';
      break;
    default:
      scriptTag.src = 'home.js';
      break;
  }

  // Remove any previously loaded scripts to avoid duplication
  const existingScript = document.querySelector(`script[src="${scriptTag.src}"]`);
  if (existingScript) {
    return; // Don't load the script again if it's already loaded
  }

  // Append the new script to the document
  document.body.appendChild(scriptTag);
}

// Load the homepage by default when the page is loaded
window.addEventListener('DOMContentLoaded', () => {
  window.loadPage('home'); // This loads the homepage content and script
});
