type BtnProps = {
    type: "button" | "submit" | "reset",
    className?: string;
    btnName: string;
}

const Button = ({ type, className, btnName}: BtnProps) => {
  return (
    <button
    type={type}
    className={className}
    >{btnName}</button>
  )
}

export default Button

