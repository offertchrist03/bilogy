import SkillItem from "../item/SkillItem";
import { competenceData } from "../../data/data";
import { useEffect, useState } from "react";
import { createArrayNumber, generateRandomKey, stringToArray } from "../../functions/UsefulFunc";
import NavAdds from "../layout/NavAdds";
import Pages from "../layout/Pages";
import Backflow from "../layout/Backflow";

export default function Page2() {

  const datas = competenceData;

  const [observe, setObserve] = useState(false)

  const [detailSkillImage, setDetailSkillImage] = useState('fa fa-heart')
  const [detailSkillNumber, setDetailSkillNumber] = useState(5)
  const [detailSkillTitre, setDetailSkillTitre] = useState('titre')
  const [detailSkillColor, setDetailSkillColor] = useState('blue-500')
  const [detailSkillFearture, setDetailSkillFearture] = useState([])

  const arrayNumberSkill = createArrayNumber(detailSkillNumber);

  const [voirSkill, setVoirSkill] = useState('hidden')

  const [skillItems, setSkillItems] = useState(document.querySelectorAll('.one-skill-item'));

  useEffect(
    () => {
      setVoirSkill('hidden')
      setSkillItems(document.querySelectorAll('.one-skill-item'))
      setObserve(true)
    }, [observe]
  )

  function unShowVoirSkill() {
    setVoirSkill('hidden')
  }
  function showVoirSkill() {
    setVoirSkill('')
  }

  function displayVoirSkill(params) {
    const dataImage = params.getAttribute('data-image')
    const dataTitre = params.getAttribute('data-titre')
    const dataNumber = params.getAttribute('data-number')
    const dataColor = params.getAttribute('data-color')
    const dataFeatures = params.getAttribute('data-features')

    const arrayFeatures = stringToArray(dataFeatures)

    setDetailSkillImage(dataImage)
    setDetailSkillTitre(dataTitre)
    setDetailSkillNumber(dataNumber)
    setDetailSkillColor(dataColor)
    setDetailSkillFearture(arrayFeatures)
  }

  skillItems.forEach(
    (skillItem) => {
      skillItem.addEventListener(
        'click',
        (e) => {
          if (observe) {
            showVoirSkill()
            displayVoirSkill(skillItem)
          }
          setObserve(false)
        }
      )
    }
  )

  return (
    <>
      <NavAdds id="the-skills" />
      <Pages id={''} classes={''}>

        <div className="w-full h-[15vh] sm:h-[20vh] pt-2 flex items-baseline justify-between">
          <div className="w-fit h-fit">
            <h3 className="uppercase text-xs sm:text-base font-bold text-gray-400">mes connaissances dans le milieu</h3>
            <h2 className="lowercase text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">mes competences</h2>
          </div>
          <div className="text-right">
            <h3 className="sm:text-xl font-semibold text-yellow-500">front end</h3>
            <h2 className="lowercase sm:text-xl lg:text-2xl font-bold text-yellow-500 flex gap-1">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </h2>
          </div>
        </div>

        <ul id="" className="w-full min-w-full pt-5 pb-10 overflow-hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">

          {datas.map(
            (data) => (
              <SkillItem key={data.titre + data.image + data.number + data.color + ''} titre={data.titre} image={data.image} number={data.number} color={data.color} features={data.features} classes={
                data.type === 'web' ? 'order-0' : 'order-1'
              } />
            )
          )}

        </ul>

        <Backflow params={voirSkill}>
          <ul id="voir-skill" className={`z-50 w-full max-w-xs h-fit p-5 px-10 bg-zinc-950/70 rounded fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline backdrop-blur-sm backdrop-grayscale outline-${detailSkillColor}/50 text-${detailSkillColor} `}>
            <li id="" className="w-full h-10 text-center text-xl flex justify-center items-center gap-2">
              <div id="" className="w-fit h-10 flex justify-center items-center">
                {
                  detailSkillImage.indexOf('fa-') !== -1
                    ? <i className={`${detailSkillImage}`}></i>
                    : <img src={detailSkillImage} alt="" className="h-10 w-10 object-contain object-center" draggable="false" />
                }
                <i className=""></i>
              </div>
              <span id="" className="">{detailSkillTitre}</span>
            </li>
            <li className={`w-full h-[3px] mx-auto rounded my-3 bg-${detailSkillColor}/50`}></li>

            <ul id="" className="text-zinc-50">
              {
                detailSkillFearture.map(
                  (arrayFeature) => (<li key={generateRandomKey()} className="w-full h-10 flex items-center"><i className="far fa-square-check w-10 text-center text-green-500"></i> <span className="">{arrayFeature}</span></li>)
                )
              }
            </ul>

            <li className={`voir-skill-barre w-full h-[3px] mx-auto rounded my-3 bg-${detailSkillColor}/50`}></li>

            <li id="" className="w-full h-10 text-xl flex justify-center items-center gap-1">
              {
                arrayNumberSkill.map(
                  (e) => (<i key={generateRandomKey() + e} className="z-10 fa fa-square"></i>)
                )
              }
            </li>
            <button onClick={unShowVoirSkill} className="h-10 w-10 absolute top-5 right-5 text-red-500 hover:text-red-600"><i className="fa fa-x"></i></button>
          </ul>
        </Backflow>

      </Pages >
    </>
  )

};
