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
