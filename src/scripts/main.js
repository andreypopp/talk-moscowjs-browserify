bespoke.horizontal.from('article', {
  hash: true,
  state: true
});

function toggleTheme() {
  document.body.classList.toggle('light');
}

var toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function(e) {
  toggleTheme();
  e.stopPropagation();
});
