import { useEffect, useState } from "react"
import { thisInputFocus, thisInputFocusRemove } from "../../functions/UsefulFunc";
import MyInput from "./MyInput";
import Backflow from "../layout/Backflow";

export default function MyForm() {

  // eslint-disable-next-line
  const [submited, setSubmitet] = useState(false)

  const [selection, setSelection] = useState('aucun')

  const [displayForm, setDisplayForm] = useState('hidden')
  const [messageItem, setMessageItem] = useState(document.querySelectorAll('.one-message-item'))

  function changeDisplay() {
    displayForm === 'hidden' ? setDisplayForm('flex') : setDisplayForm('hidden')
  }

  useEffect(
    () => {
      setMessageItem(document.querySelectorAll('.one-message-item'))
    }
    , []
  )

  const unFocusMessageItem = () => {
    messageItem.forEach(
      (item) => { thisInputFocusRemove(item) }
    )
  }

  messageItem.forEach(
    (item) => {
      item.addEventListener(
        'click',
        () => {
          setSelection(item.getAttribute('data-selection-item'))
          unFocusMessageItem()
          thisInputFocus(item)
        }
      )
    }
  )

  return (
    <>
      <Backflow params={displayForm}>
        <form action="" className={`w-full h-fit sm:max-w-sm p-5 rounded-sm outline backdrop-blur-sm outline-yellow-500/50 bg-zinc-950/90 flex flex-col gap-5 select-none`}>
          <h2 className="w-full text-center text-xl font-bold lowercase text-yellow-400">m'envoyer un message</h2>

          <MyInput icon="fa fa-at" value="votre email ici" />

          <ul className="w-full h-fit grid grid-cols-3 gap-5">

            <li className="col-span-full w-full "><span className="font-semibold capitalize text-blue-400 underline underline-offset-8">selection:</span> <input type="text" value={selection} readOnly className="bg-transparent w-fit h-fit px-2 outline-none select-none cursor-default" /> </li>

            <li data-selection-item={'demander un cours'} className={`one-message-item w-full h-24 p-2 bg-zinc-800 flex flex-col justify-center items-center gap-2 rounded-sm cursor-pointer `}>
              <i className={` text-2xl sli icon-note`}></i>
              <span className="uppercase text-sm font-bold">cours</span>
            </li>
            <li data-selection-item={'aide pour site web'} className={`one-message-item w-full h-24 p-2 bg-zinc-800 flex flex-col justify-center items-center gap-2 rounded-sm cursor-pointer `}>
              <i className={` text-2xl sli icon-globe-alt`}></i>
              <span className="uppercase text-sm font-bold">site web</span>
            </li>
            <li data-selection-item={'un message'} className={`one-message-item w-full h-24 p-2 bg-zinc-800 flex flex-col justify-center items-center gap-2 rounded-sm cursor-pointer `}>
              <i className={` text-2xl sli icon-bubbles`}></i>
              <span className="uppercase text-sm font-bold">texte</span>
            </li>

          </ul>

          {
            selection === 'un message' &&
            <MyInput icon="fa fa-envelope-open-text" value="votre message ici" />
          }

          {
            submited ? null : <p className="text-red-400 text-center"><i className="fa fa-warning mr-1"></i> veuiller competer les champs</p>
          }

          <button type="submit" className="w-full h-10 rounded text-sm uppercase font-bold bg-green-600 hover:bg-green-700 text-black disabled:bg-green-700 disabled:cursor-not-allowed" disabled={submited ? false : true}>envoyer <i className="far fa-paper-plane "></i></button>

          <button type="button" className="w-10 h-10 absolute top-0 right-0 hover:text-red-500" onClick={changeDisplay}><i className="fa fa-x"></i></button>
        </form>
      </Backflow>

      <button id="the-form-btn" type="button" className="z-40 w-10 md:w-12 h-10 md:h-12 bg-blue-500 hover:bg-blue-600 rounded fixed bottom-16 right-5 hover:outline hover:outline-2 hover:outline-blue-500 hover:outline-offset-4 justify-center items-center text-xl text-black" onClick={changeDisplay}><i className="far fa-comment"></i></button>
    </>
  )

};
