import * as Switch from "@radix-ui/react-switch";

type DarkModeToggleProps = {
  handleToggleDarkMode: () => void;
};

export default function DarkModeToggle({ handleToggleDarkMode }: DarkModeToggleProps) {
  return (
    <div className="switch-container">
      <img
        className="switch-icon"
        src="/assets/images/icon-sun-dark.svg"
        alt=""
      ></img>
      <Switch.Root className="switch-root" id="darkmode" onClick={handleToggleDarkMode}>
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>
      <img
        className="switch-icon"
        src="/assets/images/icon-moon-dark.svg"
        alt=""
      ></img>
    </div>
  );
}
