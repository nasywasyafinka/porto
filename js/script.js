document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3')?.innerText || 'a project';
    alert('You clicked on: ' + title);
  });
});
// Maintain persistent title
window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-text h2");
  title.style.position = "sticky";
  title.style.top = "0";
  title.style.backgroundColor = "#0a192f";
  title.style.zIndex = "10";
  title.style.padding = "1rem 0";
});
