import { useState } from "react";

export default function SkillItem({ image = '', titre, number, color = 'white', features = [], classes }) {

  const [hovered, setHovered] = useState(false)

  let txtColor = 'text-' + color;
  let bgColor = 'bg-' + color;

  let array = [];
  let init = 1;

  for (let index = 1; index <= number; index++) {
    array.push(init);
    init++;
  }

  const mouseON = (e) => {
    const target = e.currentTarget;
    const caption = target.firstChild;
    caption.classList.replace('opacity-0', 'opacity-40');
    caption.classList.add('animate-ping');
    setTimeout(() => {
      caption.classList.replace('opacity-40', 'opacity-0');
      caption.classList.remove('animate-ping')
      setHovered(!hovered)
    }, 900);
  }

  const mouseOFF = () => {
    // setHovered(false)
  }

  return (
    <>
      <li id={''} data-image={image} data-titre={titre} data-number={number} data-color={color} data-features={features} className={`one-skill-item w-full max-w-[160px] min-h-[160px] h-40 flex flex-col justify-center items-center gap-2 relative cursor-pointer ${txtColor} ${classes}`} onMouseEnter={mouseON} onClick={mouseON} onMouseOut={mouseOFF}>
        <div className={`w-full h-full absolute top-2 ${bgColor} opacity-0 blur-xl scale-90 -z-10`}></div>
        {
          image.indexOf('fa-') !== -1
            ? <i className={`z-10 h-12 w-12 min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] flex justify-center items-end text-3xl ${image}`}></i>
            : <img src={image} alt="" className="z-10 h-12 w-12 min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] object-contain object-center" draggable="false" />
        }
        <span className="z-10 text-xl lowercase font-semibold"> {titre} </span>
        <h6 id="" className="z-10 w-full flex justify-center gap-1">
          {
            array.map(
              (e) => (<i key={image + titre + number + e} className="z-10 fa fa-square"></i>)
            )
          }
        </h6>
      </li>
    </>
  )

};
