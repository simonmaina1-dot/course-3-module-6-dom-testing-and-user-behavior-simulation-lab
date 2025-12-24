// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
// index.js

// index.js
// index.js

// Adds text content to a given DOM element
function addElementToDOM(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

// Removes an element from the DOM
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

// Simulates a button click by updating DOM content
function simulateClick(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

// Handles form submission and updates DOM
function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const output = document.getElementById(outputId);
  const errorMessage = document.getElementById('error-message');

  if (!form || !output || !errorMessage) return;

  const input = form.querySelector('input');
  const value = input ? input.value.trim() : '';

  if (value === '') {
    errorMessage.textContent = 'Input cannot be empty';
    errorMessage.classList.remove('hidden');
    return;
  }

  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');
  output.textContent = value;

  // Optional: reset input
  input.value = '';
}

// Event listeners for actual DOM interaction
document.addEventListener('DOMContentLoaded', () => {
  const simulateBtn = document.getElementById('simulate-click');
  if (simulateBtn) {
    simulateBtn.addEventListener('click', () => {
      simulateClick('dynamic-content', 'Button Clicked!');
    });
  }

  const form = document.getElementById('user-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmit('user-form', 'dynamic-content');
    });
  }
});

// Export functions for Jest testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
