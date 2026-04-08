import { useEffect, useId, useState } from "react";

export function Header({ navigation, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            <span className="brand-mark" />
            <span className="brand-text">
              Vinicius<span>.dev</span>
            </span>
          </a>

          <button
            className={`menu-toggle ${isOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${isOpen ? "is-open" : ""}`} id={menuId}>
            {navigation.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active" : ""}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
