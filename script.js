const toggleButton = document.getElementById('themeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  const isDark = body.classList.contains('dark-theme');
  toggleButton.textContent = isDark ? '🌞 Светлая тема' : '🌚 Тёмная тема';
});