import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const MainButton = ({ text, ...props }: ButtonProps) => {
  return (
    <button {...props} className="flex px-8 py-4 w-48 items-center justify-center bg-moss text-white font-raleway transition-all hover:opacity-75">
      {text}
    </button>
  )
}

export default MainButton
