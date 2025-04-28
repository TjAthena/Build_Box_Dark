const popup = document.getElementById('popup-nnp');
const items = document.querySelectorAll('.popup-item-nnp');
let activeItem = null;

items.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent outside click from firing immediately

    const rect = item.getBoundingClientRect();

    // If clicking the same active item, toggle off
    if (activeItem === item) {
      popup.classList.toggle('show-nnp');
      item.classList.toggle('active-nnp');
      if (!popup.classList.contains('show-nnp')) activeItem = null;
      return;
    }

    // Reset all arrows
    items.forEach(i => i.classList.remove('active-nnp'));

    // Otherwise set new position and show
    activeItem = item;
    popup.style.top = `${window.scrollY + rect.bottom + 5}px`;
    popup.style.left = `${rect.left + rect.width / 2 - popup.offsetWidth / 2}px`;

    popup.classList.add('show-nnp');
    item.classList.add('active-nnp');
  });
});

// Clicking outside the popup hides it
document.addEventListener('click', (e) => {
  if (!popup.contains(e.target) && ![...items].includes(e.target)) {
    popup.classList.remove('show-nnp');
    items.forEach(i => i.classList.remove('active-nnp'));
    activeItem = null;
  }
});

// Reposition the popup when window is resized
window.addEventListener('resize', () => {
  if (activeItem) {
    const rect = activeItem.getBoundingClientRect();
    popup.style.top = `${window.scrollY + rect.bottom + 5}px`;
    popup.style.left = `${rect.left + rect.width / 2 - popup.offsetWidth / 2}px`;
  }
});