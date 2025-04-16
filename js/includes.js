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

function handleDropdownClick(event) {
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (!isTouch) {
    // Allow default click on desktop
    return;
  }

  event.preventDefault();

  const dropdown = event.target.closest('.dropdown');
  const content = dropdown.querySelector('.dropdown-content');

  // Toggle dropdown visibility
  const isVisible = content.style.display === 'block';
  document.querySelectorAll('.dropdown-content').forEach(el => el.style.display = 'none');
  content.style.display = isVisible ? 'none' : 'block';

  // Optional: Follow the link if dropdown already open
  if (isVisible) {
    window.location.href = event.target.href;
  }
}
