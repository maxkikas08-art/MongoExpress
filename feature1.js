window.loadFeature1 = function() {
  const content = document.getElementById('content');
  let level = 1; // Track current level

  function generateEquations(count = 3) {
    const equations = [];
    const ops = ['+', '-', '*', '/', '^']; // operations for Level Two

    for (let i = 0; i < count; i++) {
      let a, b, op, answer, equationText;

      if (level === 1) {
        // Level One: simple math
        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 10) + 1;
        op = ['+', '-', '*'][Math.floor(Math.random() * 3)];
        switch (op) {
          case '+': answer = a + b; break;
          case '-': answer = a - b; break;
          case '*': answer = a * b; break;
        }
        equationText = `${a} ${op} ${b} =`;
      } else {
        // Level Two: very hard equations
        const type = Math.floor(Math.random() * 4);
        switch (type) {
          case 0: // large numbers + arithmetic
            a = Math.floor(Math.random() * 200) + 50;
            b = Math.floor(Math.random() * 200) + 50;
            op = ['+', '-', '*'][Math.floor(Math.random() * 3)];
            switch (op) {
              case '+': answer = a + b; break;
              case '-': answer = a - b; break;
              case '*': answer = a * b; break;
            }
            equationText = `${a} ${op} ${b} =`;
            break;
          case 1: // fractions
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            answer = (a / b).toFixed(2);
            equationText = `${a} / ${b} =`;
            break;
          case 2: // exponents
            a = Math.floor(Math.random() * 10) + 2;
            b = Math.floor(Math.random() * 3) + 2;
            answer = Math.pow(a, b);
            equationText = `${a}^${b} =`;
            break;
          case 3: // algebra
            b = Math.floor(Math.random() * 20) + 5; // constant term
            a = Math.floor(Math.random() * 10) + 2; // multiplier
            const x = Math.floor(Math.random() * 20) + 1;
            answer = x;
            equationText = `${a}x + ${b} = ${a*x + b}`;
            break;
        }
      }

      equations.push({ text: equationText, answer });
    }

    return equations;
  }

  function loadFeatureContent() {
    const equations = generateEquations(3);

    content.innerHTML = `
      <div id="welcome-message" style="text-align:center; margin-bottom:30px;">
        <h1>Welcome to the first feature of my website!</h1>
        <p>${level === 1 ? "✨ Can you beat the calculator? Try it out below." : "You will never beat this!"}</p>
      </div>

      <div id="feature-container">
        <div id="calculator">
          <input type="text" id="calc-display" readonly placeholder="0">
          <div id="calc-buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn operator" data-value="/">/</button>

            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn operator" data-value="*">*</button>

            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn operator" data-value="-">-</button>

            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn" id="clear">C</button>
            <button class="btn operator" data-value="+">+</button>

            <button class="btn" id="equals">=</button>
          </div>
        </div>

        <div id="equations-container">
          <div id="equations-box">
            <h2>${level === 1 ? "Here's some equations:" : "Level 2:"}</h2>
            ${equations.map(eq => `
              <div class="equation-item" data-answer="${eq.answer}">
                ${eq.text} <input type="text" class="answer-input">
              </div>
            `).join('')}
            <button id="complete-btn">Complete</button>
          </div>
        </div>
      </div>

      <style>
        #feature-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 40px;
          margin-top: 50px;
        }

        #calculator {
          background: #222;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          color: white;
          font-family: Arial, sans-serif;
          width: 320px;
        }

        #calc-display {
          width: 92%;
          height: 40px;
          margin-bottom: 10px;
          text-align: right;
          font-size: 18px;
          border-radius: 6px;
          border: none;
          padding: 5px 10px;
        }

        #calc-buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .btn {
          padding: 15px;
          background: #444;
          border: none;
          border-radius: 6px;
          font-size: 18px;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn:hover { background: #555; }
        .btn:active { transform: scale(0.95); box-shadow: 0 2px 5px rgba(0,0,0,0.2); }

        .operator { background: #ff9500; }
        .operator:hover { background: #e08900; }

        #equals { grid-column: span 4; background: #0a84ff; }
        #equals:hover { background: #006ce0; }

        #clear { background: #ff3b30; }
        #clear:hover { background-color: #e03127; }

        #equations-box {
          background-color: #d9d9d9;
          padding: 20px;
          height: 350px;
          border-radius: 10px;
          max-width: 300px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .equation-item {
          font-size: 18px;
          transition: opacity 1s ease;
        }

        .answer-input {
          width: 60px;
          font-size: 16px;
          padding: 2px 5px;
          margin-left: 5px;
        }

        #complete-btn {
          background-color: #218838;
          color: white;
          padding: 10px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 10px;
          align-self: flex-start;
        }

        #complete-btn:hover {
          background-color: #1e6c31;
        }

@media (max-width: 600px) {
  #feature-container {
    flex-direction: row; /* Keep them in a row (side by side) */
    justify-content: space-between; /* Ensure there's space between them */
    align-items: flex-start;
    gap: 20px; /* Adjust space between the two elements */
  }

  #calculator {
    width: 35%; /* Keep the width of the calculator as per your requirement */
    padding: 30px; /* More padding to make it bigger */
  }

  #calc-display {
    font-size: 17px;
    height: 17px; /* Bigger display */
  }

  #calc-buttons .btn {
    padding: 11px; /* Larger buttons */
    font-size: 13px;
  }

  #equations-box {
    width: 82%; /* Increased width to make it a bit larger */
    padding: 20px; /* Increased padding for a more spacious feel */
    height: 280px; /* Increased height */
    font-size: 14px; /* Shrink text inside */
  }

  .equation-item {
    font-size: 14px; /* Smaller equation text */
  }

  .answer-input {
    width: 50px; /* Smaller input box */
    font-size: 14px;
  }

  #complete-btn {
    padding: 10px 15px;
    font-size: 16px;
    margin-top: 66px;
  }

  /* Level 2 adjustments */
  #equations-box h2 {
    font-size: 18px; /* Slightly smaller header text for Level 2 */
  }

  .equation-item {
    font-size: 13px; /* Smaller font size for equations in Level 2 */
  }

  .answer-input {
    width: 45px; /* Slightly smaller answer input box for Level 2 */
    font-size: 13px;
  }

  /* Level 2 text size adjustments */
  #welcome-message h1 {
    font-size: 19px; /* smaller welcome text */
  }

  #welcome-message p {
    font-size: 15px;
  }
}



      </style>
    `;

    // Calculator functionality
    const display = document.getElementById('calc-display');
    let currentInput = '';
    document.querySelectorAll('#calc-buttons .btn').forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear') {
          currentInput = '';
          display.value = '';
        } else if (button.id === 'equals') {
          try {
            display.value = eval(currentInput);
            currentInput = display.value;
          } catch (e) {
            display.value = 'Error';
            currentInput = '';
          }
        } else {
          currentInput += value;
          display.value = currentInput;
        }
      });
    });

    // Equation checking
    const equationItems = document.querySelectorAll('.equation-item');
    equationItems.forEach(item => {
      const input = item.querySelector('.answer-input');
      input.addEventListener('input', () => {
        if (parseFloat(input.value) === parseFloat(item.dataset.answer)) {
          item.style.opacity = 0;
          setTimeout(() => item.style.display = 'none', 1000);
        }
      });
    });

    document.getElementById('complete-btn').addEventListener('click', () => {
      const remaining = Array.from(equationItems).filter(i => i.style.display !== 'none');
      if (remaining.length === 0) {
        if (level === 1) level = 2;
        alert(level === 1 ? '🎉 Congrats on beating the calculator!' : 'Too easy, huh?');
        loadFeatureContent();
      } else {
        alert('Really?');
      }
    });
  }

  loadFeatureContent();
};
