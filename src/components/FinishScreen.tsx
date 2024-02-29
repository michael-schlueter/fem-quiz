type FinishScreenProps = {
    score: number;
}

export default function FinishScreen({ score }: FinishScreenProps) {
  return (
    <div>{score}</div>
  )
}
