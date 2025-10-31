window.loadHome = function() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div style="text-align: center; padding: 30px; font-family: Arial, sans-serif; color: #333;">
      <h1 style="font-size: 36px; font-weight: bold; color: #444;">Welcome to My Page!</h1>
      <p style="font-size: 18px; margin-top: 10px; color: #666;">
        I'm so glad you're here! Feel free to explore all the exciting features I’ve built.
        <p style="font-size: 18px; margin-top: 10px; color: #666;"> 
        Use the navigation above to discover more. 
      </p>
      <p style="font-size: 18px; margin-top: 20px; color: #555;">
        I hope you enjoy your visit and find everything you're looking for!
      </p>
    </div>
    <p></p>
    <p></p>
    <p></p>
    <!-- Watermark / Footer -->
    <div style="text-align: center; font-family: Arial, sans-serif; color: #aaa; font-size: 14px; margin-top: 40px; padding: 20px 0;">
      <p style="margin: 0;">© 2025 Max's Website. All rights reserved.</p>
    </div>
  `;
};
