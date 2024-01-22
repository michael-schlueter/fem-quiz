import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header>
      <div className="category">
        <div className="logo-container">
          <img
            className="logo"
            src="/assets/images/icon-accessibility.svg"
            alt="accessibility icon"
          />
        </div>
        <h4>Accessibility</h4>
      </div>
      <DarkModeToggle />
    </header>
  );
}
