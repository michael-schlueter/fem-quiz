type ButtonProps = {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="submit-btn">
        <h5>{children}</h5>
    </button>
  )
}
