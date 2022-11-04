document.addEventListener("DOMContentLoaded", function() { 
  const y = document.querySelector('[data-year-in-footer]');
  const c = new Date().getFullYear();
  y.textContent = c;
});