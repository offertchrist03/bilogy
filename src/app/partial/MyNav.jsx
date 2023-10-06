import { useEffect } from "react";
import NavAdds from "../layout/NavAdds";

import { getTodayDate, getTodayDateTruncated } from "../../functions/MyDate";

export default function MyNav() {

  const theHtml = document.getElementById("the-html");
  theHtml.className = "dark";

  const linksIns = [
    {
      id: 'linksIns0',
      icon: 'far fa-user',
      ref: 'the-top',
    },
    {
      id: 'linksIns1',
      icon: 'fa fa-pie-chart',
      ref: 'the-skills',
    },
    {
      id: 'linksIns2',
      icon: 'fa fa-martini-glass-citrus',
      ref: 'the-poject',
    },
    {
      id: 'linksIns3',
      icon: 'far fa-snowflake',
      ref: 'the-service',
    },
  ]

  useEffect(
    () => {
      const navAdds = document.getElementsByClassName('nav-adds');

      const pageItems = document.getElementsByClassName('page-items');

      const navCaption = document.getElementById('nav-caption');

      const navLinks = document.querySelectorAll('.nav-links');

      const removeActives = () => {
        navLinks.forEach(
          (el) => {
            el.classList.remove('text-yellow-400')
            el.classList.add('hover:text-blue-400')
          }
        )
      }

      window.addEventListener(
        'scroll',
        () => {
          window.scrollY > navAdds[1].offsetTop - 5 ? document.getElementById('the-top-btn').classList.replace('hidden', 'flex') : document.getElementById('the-top-btn').classList.replace('flex', 'hidden');
          window.scrollY > navAdds[1].offsetTop - 5 ? document.getElementById('the-form-btn').classList.replace('right-5', 'right-20') : document.getElementById('the-form-btn').classList.replace('right-20', 'right-5');

          if (window.scrollY >= pageItems[3].offsetTop - navAdds[3].clientHeight - 5) {
            removeActives()
            navLinks[3].classList.add('text-yellow-400')
            navLinks[3].classList.remove('hover:text-blue-400')
            navCaption.style.marginLeft = navLinks[3].offsetLeft + 'px'
          } else if (window.scrollY >= pageItems[2].offsetTop - navAdds[2].clientHeight - 5) {
            removeActives()
            navLinks[2].classList.add('text-yellow-400')
            navLinks[2].classList.remove('hover:text-blue-400')
            navCaption.style.marginLeft = navLinks[2].offsetLeft + 'px'
          } else if (window.scrollY >= pageItems[1].offsetTop - navAdds[1].clientHeight - 5) {
            removeActives()
            navLinks[1].classList.add('text-yellow-400')
            navLinks[1].classList.remove('hover:text-blue-400')
            navCaption.style.marginLeft = navLinks[1].offsetLeft + 'px'
          } else if (window.scrollY <= window.screen.height) {
            removeActives()
            navLinks[0].classList.add('text-yellow-400')
            navLinks[0].classList.remove('hover:text-blue-400')
            navCaption.style.marginLeft = navLinks[0].offsetLeft + 'px'
          }
        }
      )

      // ENTERS
      navLinks[0].classList.add('text-yellow-400')
      navLinks[0].classList.remove('hover:text-blue-400')
      navCaption.style.marginLeft = navLinks[0].offsetLeft + 'px'
    }, []
  )

  const theBody = document.body;
  theBody.className = "z-0 bg-zinc-300 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 scroll-smooth";

  return (
    <>
      <NavAdds id="the-top" />
      <div id="" className="z-40 w-full min-h-[80px] h-[15vh] bg-zinc-950/50 backdrop-grayscale backdrop-blur-sm box-border fixed top-0 left-0">
        <nav id="" className="w-full px-5 sm:container mx-auto min-h-[80px] h-[15vh] sm:px-10 md:px-0 xl:px-16 relative flex justify-between items-center select-none ">
          <h1 id="logo" className="w-fit h-full flex flex-col justify-center">
            <span className="text-xl uppercase font-bold text-blue-600">bilogy</span>
            <span className="hidden sm:block text-gray-400 font-semibold lowercase">{getTodayDate()}</span>
            <span className="block sm:hidden text-gray-400 font-semibold lowercase">{getTodayDateTruncated()}</span>
          </h1>
          <div id="" className="w-fit h-full flex justify-end items-center gap-3 relative">
            <ul id="" className="w-fit h-full flex gap-2 ">

              <li id="nav-caption" className="z-10 w-10 md:w-14 min-w-[40px] h-[5px] rounded-t-sm bg-yellow-400 absolute left-0 bottom-0 ease-linear"></li>

              {
                linksIns.map(
                  (linkIn) => (<li className="nav-links w-10 md:w-14 min-w-[40px] h-full relative before:w-10 before:md:w-14 before:h-[5px] before:rounded-t-sm before:bg-blue-400/20 hover:before:bg-blue-400/80 before:absolute before:bottom-0 before:left-0 hover:text-blue-400" key={linkIn.id}> <a id="" href={`#${linkIn.ref}`} className="w-full h-full flex justify-center items-center "><i className={linkIn.icon}></i></a> </li>)
                )
              }

            </ul>

          </div>
        </nav>
      </div>
      <a href={'#the-top'} draggable="false" id="the-top-btn" className="z-40 w-10 md:w-12 h-10 md:h-12 bg-blue-500 hover:bg-blue-600 rounded fixed bottom-16 right-5 hover:outline hover:outline-2 hover:outline-blue-500 hover:outline-offset-4 justify-center items-center text-xl hidden"><i className="fa fa-chevron-up text-black"></i></a>

    </>
  )

}