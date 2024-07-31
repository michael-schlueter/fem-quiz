import * as Switch from "@radix-ui/react-switch";

type DarkModeToggleProps = {
  handleToggleDarkMode: () => void;
  isDarkMode: boolean;
};

export default function DarkModeToggle({
  handleToggleDarkMode,
  isDarkMode,
}: DarkModeToggleProps) {
  return (
    <div className="switch-container">
      {isDarkMode ? (
        <img
          className="switch-icon"
          src="/assets/images/icon-sun-light.svg"
          alt=""
        ></img>
      ) : (
        <img
          className="switch-icon"
          src="/assets/images/icon-sun-dark.svg"
          alt=""
        ></img>
      )}
      <Switch.Root
        className="switch-root"
        id="darkmode"
        onClick={handleToggleDarkMode}
        data-testid="darkmode-switch"
        aria-label="darkmode toggle"
      >
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>
      {isDarkMode ? (
        <img
          className="switch-icon"
          src="/assets/images/icon-moon-light.svg"
          alt=""
        ></img>
      ) : (
        <img
          className="switch-icon"
          src="/assets/images/icon-moon-dark.svg"
          alt=""
        ></img>
      )}
    </div>
  );
}
