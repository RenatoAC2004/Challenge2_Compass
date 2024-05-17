const MainButton = ({ text }: { text: string }) => {
  return (
    <button className="flex px-14 py-4 items-center justify-center bg-moss text-white font-raleway transition-all hover:opacity-75">
      {text}
    </button>
  )
}

export default MainButton
