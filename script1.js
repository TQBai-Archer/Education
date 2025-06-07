document.querySelectorAll('.dropdown > a.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault(); // Only prevents the toggle link, not submenu links

    const menu = this.nextElementSibling;

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.style.display = 'none';
    });

    // Toggle this one
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
