import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      
      <img src={logo} alt="Logo" className="logo-img" />

      
      <input
        type="text"
        placeholder="Search product..."
        className="search-box"
      />

      
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}

export default Header;