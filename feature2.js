window.loadFeature2 = function() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h1>Draw freely anything you want!</h1>
    <p>Whatever you draw will be added as your profile picture!</p>
    <div id="canvasContainer" style="position: relative;">
      <canvas id="drawingCanvas"></canvas>
      <div id="profilePictureContainer" style="display: none;">
        <img id="profilePicture" alt="Profile Picture" />
      </div>
    </div>

    <!-- Dark grey control box below canvas -->
    <div id="controlBox" style="
      background-color: #333;
      padding: 15px 25px;
      border-radius: 8px;
      margin-top: 70px;
      display: flex; 
      gap: 20px;
      width: fit-content;
      margin-left: 115px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.3);
    ">
      <button id="clearBtn">Clear</button>
      <button id="saveBtn">Save</button>
      <div id="thicknessControls" style="display: flex; gap: 10px;">
        <button class="dot" data-size="2" style="width: 12px; height: 12px; border-radius: 50%; background-color: black; border: none; cursor: pointer;"></button>
        <button class="dot" data-size="5" style="width: 16px; height: 16px; border-radius: 50%; background-color: black; border: none; cursor: pointer;"></button>
        <button class="dot" data-size="8" style="width: 20px; height: 20px; border-radius: 50%; background-color: black; border: none; cursor: pointer;"></button>
      </div>
    </div>
  `;

  // Initialize canvas and pfp
  setupCanvas();
  initializeProfilePicture();
};

function setupCanvas() {
  const canvas = document.getElementById('drawingCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 400;
  canvas.height = 400;
  canvas.style.backgroundColor = 'white';
  canvas.style.border = '1px solid #ccc';
  canvas.style.borderRadius = '8px';

  let drawing = false;
  let lastX = 0;
  let lastY = 0;
  let lineWidth = 2;

  ctx.strokeStyle = 'black';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  canvas.addEventListener('mousedown', e => {
    drawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
  });

  canvas.addEventListener('mousemove', e => {
    if (!drawing) return;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  });

  canvas.addEventListener('mouseup', () => (drawing = false));
  canvas.addEventListener('mouseout', () => (drawing = false));

  // Clear
  const clearBtn = document.getElementById('clearBtn');
  clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

  // Save
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', () => {
    const dataUrl = canvas.toDataURL();
    const profilePicture = document.getElementById('profilePicture');
    const profilePictureContainer = document.getElementById('profilePictureContainer');

    profilePicture.src = dataUrl;
    profilePictureContainer.style.display = 'block';
    profilePictureContainer.innerHTML = '';

    // Move to above hamburger in mobile
    if (window.innerWidth <= 600) {
      const nav = document.querySelector('nav');
      nav.style.position = 'relative';
      profilePictureContainer.style.position = 'absolute';
      profilePictureContainer.style.top = '12px';
      profilePictureContainer.style.right = '60px';
      profilePictureContainer.style.zIndex = '999';
    } else {
      profilePictureContainer.style.position = 'static';
    }

    alert("Profile picture updated!");
  });

  // Button styles
  [clearBtn, saveBtn].forEach(btn => {
    btn.style.padding = '10px 20px';
    btn.style.border = 'none';
    btn.style.borderRadius = '25px';
    btn.style.backgroundColor = '#4CAF50';
    btn.style.color = 'white';
    btn.style.fontSize = '16px';
    btn.style.cursor = 'pointer';
    btn.style.transition = 'background-color 0.3s ease';
    btn.addEventListener('mouseover', () => (btn.style.backgroundColor = '#45a049'));
    btn.addEventListener('mouseout', () => (btn.style.backgroundColor = '#4CAF50'));
  });

  // Thickness controls
  const dots = document.querySelectorAll('#thicknessControls .dot');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      lineWidth = parseInt(dot.getAttribute('data-size'));
      dots.forEach(d => (d.style.outline = 'none'));
      dot.style.outline = '2px solid #4CAF50';
      dot.style.outlineOffset = '2px';
    });
  });
}

function initializeProfilePicture() {
  const profilePicture = document.getElementById('profilePicture');
  profilePicture.style.width = '28.5px';
  profilePicture.style.height = '28.5px';
  profilePicture.style.borderRadius = '50%';
  profilePicture.style.backgroundColor = 'white';
  profilePicture.style.objectFit = 'cover';
  profilePicture.style.cursor = 'pointer';
  profilePicture.style.transition = 'transform 0.3s ease';
}
