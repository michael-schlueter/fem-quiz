import * as Switch from "@radix-ui/react-switch";

export default function DarkModeToggle() {
  return (
    <div className="switch-container">
      <img className="switch-icon" src="/assets/images/icon-sun-dark.svg" alt=""></img>
      <Switch.Root className="switch-root" id="darkmode">
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>
      <img className="switch-icon" src="/assets/images/icon-moon-dark.svg" alt=""></img>
    </div>
  );
}
