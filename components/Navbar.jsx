export default function Navbar({ onToggleMenu }) {
  return (
    <nav>
      <div className="logo">HEMANTH</div>
      <div className="menu-toggle" id="menuToggle" onClick={onToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
