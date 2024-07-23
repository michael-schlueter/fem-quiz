// import * as Progress from "@radix-ui/react-progress";

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="progress-wrapper"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="bar-wrapper">
        <div
          className="bar"
          data-testid="progress-bar"
          style={{
            width: progress + "%",
          }}
        ></div>
      </div>
    </div>
  );
}
