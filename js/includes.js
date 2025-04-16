window.addEventListener('DOMContentLoaded', () => {
  includeHTML('header', 'includes/header.html');
  includeHTML('footer', 'includes/footer.html');
});

function includeHTML(tagId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(tagId).innerHTML = data;
    });
}

function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.closest('.dropdown');
  const content = dropdown.querySelector('.dropdown-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
