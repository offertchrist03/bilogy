import img from '../../img/Chuck_Scream.png'
import img2 from '../../img/f2eac7073015eefd9a4438c66d14608e.png'
import img3 from '../../img/img-0.jpg'

import { profileData } from "../../data/data";

export default function Page1() {

  const data = profileData;

  const age = () => {
    const naissance = new Date(data.date_naissance);
    const naissanceYear = naissance.getFullYear();
    const today = new Date();
    const todayYear = today.getFullYear();
    return todayYear - naissanceYear;
  }

  return (
    <>
      <section id="" className="page-items z-0 w-full px-5 flex-col sm:container mx-auto h-fit min-h-[85vh] sm:px-10 md:px-0 xl:px-16 relative flex sm:flex-row select-none overflow-hidden">

        <div className="z-0 w-full md:flex-1 h-full pt-12 sm:pt-[10vh] lg:pt-[12vh]">
          <h3 className="uppercase font-bold text-gray-400">portfolio <span className="text-blue-500 lowercase"><i className="fa fa-mars"></i> {age()} ans</span></h3>
          <h2 className="lowercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{data.pseudo} <i className="far fa-hand-point-left text-yellow-500 my-animate-point"></i></h2>
          <p className="max-w-sm text-base md:text-xl mt-2">Je suis interesse dans le domaine du <span className="uppercase text-blue-400 font-semibold">javascript</span> et du <span className="uppercase text-blue-400 font-semibold">developpement d'application web</span> </p>
          <ul className="max-w-sm mt-2 text-green-500 font-semibold flex flex-col gap-1 md:gap-0">
            <li className="w-full h-8 md:h-10 flex items-center"><i className="w-8 text-center text-yellow-400 fa fa-at"></i> {data.contact.email} </li>
            <li className="w-full h-8 md:h-10 flex items-center"><i className="w-8 text-center text-yellow-400 fab fa-github-alt"></i> {data.contact.github} </li>
            <li className="w-full h-8 md:h-10 flex items-center"><i className="w-8 text-center text-yellow-400 fa fa-phone"></i> {data.contact.telephone[0]} / {data.contact.telephone[1]}</li>
          </ul>
        </div>
        <div className="-z-10 w-full h-full bg-transparent brightness-50 absolute left-0 bottom-0 sm:top-0 md:flex-1 md:h-fit md:static md:sm:brightness-100 ">
          <img src={img} alt="" draggable='false' className='w-52 h-52 right-0 translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 lg:translate-x-0 sm:rotate-45 object-cover object-center absolute top-0 md:left-0 md:-rotate-45 lg:right-0 lg:left-auto ' />
          <img src={img2} alt="" draggable='false' className='w-4/5 absolute bottom-0 left-0 sm:static md:w-full max-w-lg mt-0 -translate-y-5 sm:translate-y-0 md:translate-y-0 md:mt-[10vh] lg:mt-0' />
        </div>

        <div className="w-24 sm:w-36 h-24 sm:h-36 absolute top-5 right-5 overflow-hidden bg-blue-500/80 rounded p-1 lg:w-52 lg:h-52 lg:top-1/2 lg:right-1/2 lg:translate-x-1/2 lg:-translate-y-1/2">
          <img src={img3} alt="" draggable='false' className='w-full h-full object-cover object-center rounded' />
        </div>

        <a href="#my-footer" className="w-fit h-fit">
          <div id="" className="cursor-pointer w-fit h-10 box-content border-[3px] p-1 border-gray-500 absolute left-1/2 bottom-10 -translate-x-1/2 rounded-full">
            <div className="w-5 h-5 mt-5 animate-bounce bg-gray-500 rounded-full"></div>
          </div>
        </a>
      </section>
    </>
  )

}