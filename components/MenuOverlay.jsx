export default function MenuOverlay({ isOpen, activeLink, onNavigate }) {
  return (
    <div className={`menu-overlay${isOpen ? ' active' : ''}`} id="menuOverlay">
      <ul className="menu-overlay-links">
        {['home', 'about', 'skills', 'work', 'certificates', 'contact'].map((section) => (
          <li key={section}>
            <a
              onClick={() => onNavigate(section)}
              className={activeLink === section ? 'active-link' : ''}
            >
              {section.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <div className="menu-overlay-footer">
        <a href="https://github.com/HemanthM21" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/mada-hemanth-0774892ab" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:mhemanth212@gmail.com">Email</a>
      </div>
    </div>
  );
}
