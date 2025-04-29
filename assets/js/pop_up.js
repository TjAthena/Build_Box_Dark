const popup = document.getElementById('popup-nnp');
const popupContent = document.querySelector('.popup-content-nnp');
const items = document.querySelectorAll('.popup-item-nnp');
let activeItem = null;

// Map titles to content
const useCaseContent = {
  "Slab Panel Locking": [
    "Stub pins ensure tight and aligned slab form panels.",
    "Wedges provide quick, tool-free locking.",
    "Enhances speed and safety during slab setup."
  ],
  "Column Form Stability": [
    "Wallties prevent bulging from concrete pressure.",
    "German clamps hold vertical forms firmly in place.",
    "Bottom alignment tools maintain base-level uniformity."
  ],
  "Shear Wall Reinforcement": [
    "Wallties distribute lateral pressure across wall panels.",
    "Wedges enable easy setup and removal without damage.",
    "Stub pins maintain form shape under pressure."
  ],
  "Beam Soffit Support": [
    "Stub pins lock beam form panels quickly.",
    "Wedges allow precise gap-free joints.",
    "Ensures structural integrity and clean concrete lines."
  ],
  "Precast Assembly": [
    "German clamps enable repeatable, firm joints.",
    "Wallties manage tension during pouring.",
    "Bottom alignment guides consistent setups."
  ],
  "Retaining Wall Construction": [
    "Wallties provide tension resistance for large spans.",
    "Stub pins secure modular side forms.",
    "Alignment tools ensure plumb and level setups."
  ],
  "Lift Core Wall Shuttering": [
    "Wedges ensure fast repetitive assembly/disassembly.",
    "Wallties counter high pressure during tall pours.",
    "German clamps help avoid vertical misalignment."
  ],
  "Foundation Raft Shuttering": [
    "Stub pins simplify large foundation form joins.",
    "Wedges ensure leak-free panel locking.",
    "Bottom alignment aids in edge accuracy."
  ],
  "Tunnel Lining Forms": [
    "German clamps secure curved or complex form joins.",
    "Wallties hold lateral forces in deep pours.",
    "Stub pins reduce setup time in confined spaces."
  ],
  "Staircase Formwork": [
    "Stub pins allow quick form locking in angular designs.",
    "Bottom alignment ensures consistency in riser height.",
    "Wedges eliminate gaps in tread and landing forms."
  ],
  "Circular Column Shuttering": [
    "Wedges tightly bind arc panels together.",
    "Stub pins offer easy assembly without special tools.",
    "German clamps reduce deviation in curvature."
  ],
  "Retrofitting & Repair Works": [
    "Wallties can be used to stabilize compromised forms.",
    "Wedges allow reuse and fast adjustments in repairs.",
    "Stub pins work even in restricted repair areas."
  ]
};

// Event listeners
items.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const rect = item.getBoundingClientRect();
    const title = item.textContent.replace('▼', '').trim();

    // Toggle logic
    if (activeItem === item) {
      popup.classList.toggle('show-nnp');
      item.classList.toggle('active-nnp');
      if (!popup.classList.contains('show-nnp')) activeItem = null;
      return;
    }

    items.forEach(i => i.classList.remove('active-nnp'));
    item.classList.add('active-nnp');
    activeItem = item;

    // Set popup position
    popup.style.top = `${window.scrollY + rect.bottom + 5}px`;
    popup.style.left = `${rect.left + rect.width / 2 - popup.offsetWidth / 2}px`;

    // Set popup content
    const points = useCaseContent[title] || ["Content not found."];
    popupContent.innerHTML = points.map(p => `<p><span style="color: orange;">✔</span> ${p}</p>`).join('');
    popup.classList.add('show-nnp');
  });
});

// Hide popup on outside click
document.addEventListener('click', (e) => {
  if (!popup.contains(e.target) && ![...items].includes(e.target)) {
    popup.classList.remove('show-nnp');
    items.forEach(i => i.classList.remove('active-nnp'));
    activeItem = null;
  }
});

// Reposition popup on resize
window.addEventListener('resize', () => {
  if (activeItem) {
    const rect = activeItem.getBoundingClientRect();
    popup.style.top = `${window.scrollY + rect.bottom + 5}px`;
    popup.style.left = `${rect.left + rect.width / 2 - popup.offsetWidth / 2}px`;
    popup.style.left = `${rect.left}px`; 

  }
});
