import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header>
      <div className="header-category">
        <div className="logo-container">
          <div className="icon icon-accessibility">
            <img
              className="logo"
              src="/assets/images/icon-accessibility.svg"
              alt="accessibility icon"
            />
          </div>
        </div>
        <h5>Accessibility</h5>
      </div>
      <DarkModeToggle />
    </header>
  );
}
