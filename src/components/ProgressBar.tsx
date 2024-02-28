import * as Progress from "@radix-ui/react-progress";

type ProgressBarProps = {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <Progress.Root className="ProgressRoot" value={progress}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}
