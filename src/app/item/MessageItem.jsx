import { useState } from "react"

export default function MessageItem({ icon = 'sli icon-note', titre = 'cours', etat = false }) {

  const [clicked, setClicked] = useState(etat)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <li onClick={handleClick} className={`one-message-item w-full h-24 p-2 bg-zinc-800 flex flex-col justify-center items-center gap-2 rounded-sm cursor-pointer ${clicked ? 'outline outline-blue-500/50 outline-offset-0' : ''} `}>
        <i className={`${icon} text-2xl `}></i>
        <span className="uppercase text-sm font-bold">{titre}</span>
      </li>
    </>
  )
}