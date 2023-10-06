import { useState } from "react"
// import { thisInputFalse, thisInputTrue } from "../../functions/UsefulFunc"

export default function MyInput({ icon = "fa fa-icons", value = "votre text ici" }) {

  const [currentValue, setCurrentValue] = useState('')

  const handleFocus = (e) => {
    // console.log('e.target :>> ', e.target);
    // console.log('e.target.parentElement :>> ', e.target.parentElement);
    const parent = e.target.parentElement
    parent.classList.add('outline', 'outline-blue-500/50', 'outline-offset-0')
  }

  const handleChange = (e) => {
    setCurrentValue(e.target.value)
    // console.log(currentValue)
  }

  return (
    <div className="w-full p-1 rounded-sm bg-zinc-800 flex">
      <span className="w-10 min-w-[40px] max-w-[40px] h-10 text-xl flex justify-center items-center text-blue-400"><i className={icon}></i></span>
      <input placeholder={value} value={currentValue} onFocus={handleFocus} onChange={handleChange} type="text" className="w-full h-10 text-base outline-none bg-transparent" />
    </div>
  )

};
