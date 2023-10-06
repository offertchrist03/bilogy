import { Link, Outlet } from "react-router-dom";
import { CheckOrNot, IconWeb, capitalizeFirstLettre, myTextEllipsis, } from "../../functions/UsefulFunc";

export default function ProjectItem({ image = 'ankamantatra.PNG', titre = '', outils = [], features = [0, 0], description = '', lien = '' }) {

  const theImage = `/image/${image}`

  const mouseClick = (e) => {
    const target = e.currentTarget;
    const caption = target.firstChild;
    if (caption.classList.contains('hidden')) {
      caption.classList.replace('hidden', 'flex');
    } else {
      if (e.target.tagName !== "A" && e.target.tagName !== "BUTTON") {
        caption.classList.replace('flex', 'hidden');
      }
    }
  }

  const mouseLeave = (e) => {
    const target = e.currentTarget;
    const caption = target.firstChild;
    setTimeout(() => {
      caption.classList.replace('flex', 'hidden');
    }, 100);
  }

  return (
    <>
      <li className="w-full max-w-sm min-w-[320px] bg-transparent h-60 min-h-[240px] max-h-[240px] border border-zinc-800 rounded-sm overflow-hidden relative cursor-pointer " onClick={mouseClick} onMouseLeave={mouseLeave}>

        <ul className="z-10 w-full h-full p-5 absolute top-0 left-0 bg-black/70 backdrop-blur hidden flex-col gap-3 cursor-default">
          <li className="">
            <span className="block underline underline-offset-4 opacity-70">features:</span>
            <label className="block">{CheckOrNot(features[0])} responsive</label>
            <label className="block">{CheckOrNot(features[1])} multiplateforme</label>
          </li>
          <li className="">
            <span className="block underline underline-offset-4 opacity-70">description:</span>
            <p className="">{myTextEllipsis(description, 75)}</p>
          </li>
          <li className="w-full overflow-hidden">
            {/* <a href={lien} target="_blanc" className="w-full text-left truncate text-blue-400 hover:underline underline-offset-2 ">visiter le site</a> */}
            <Link to={lien} target="_blank" className="w-full text-left truncate text-blue-400 hover:underline underline-offset-2 ">visiter le site</Link>
          </li>
          <button className="sli icon-size-fullscreen absolute top-5 right-5 cursor-pointer hover:text-blue-500"></button>
        </ul>
        <div className="w-full h-full bg-zinc-700">
          <img src={theImage} alt="" className='w-full h-full object-cover object-center' />
        </div>
        <h6 className="w-fit h-16 px-5 bg-black/60 absolute bottom-0 left-0 font-semibold flex items-center gap-2">{capitalizeFirstLettre(titre)}</h6>
        <h5 className="w-fit h-16 px-5 bg-black/60 absolute bottom-0 right-0 font-semibold flex items-center gap-2">
          {IconWeb(outils)}
        </h5>

      </li>
      <Outlet />
    </>
  )

};
