const MainButton = ({ text }: { text: string }) => {
  return (
    <button className="flex px-8 py-4 w-48 items-center justify-center bg-moss text-white font-raleway transition-all hover:opacity-75">
      {text}
    </button>
  )
}

export default MainButton
