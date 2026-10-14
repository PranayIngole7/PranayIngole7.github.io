import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "../data/portfolio";
import type { useTheme } from "../hooks/useTheme";

type ThemeControls = ReturnType<typeof useTheme>;

interface NavbarProps {
  theme: ThemeControls["theme"];
  toggleTheme: ThemeControls["toggleTheme"];
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">P.</span>
          <span>Pranay Ingole</span>
        </a>

        <div className={`nav-content${menuOpen ? " nav-content-open" : ""}`}>
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <button
          className="icon-button theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  );
}
