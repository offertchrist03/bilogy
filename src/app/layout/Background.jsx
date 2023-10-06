import { useEffect } from "react";
import InputLock from "../../functions/lockFiles";
import { myTextEllipsis } from "../../functions/UsefulFunc";

export default function Background() {
  console.log('by christ-offert');

  const test = myTextEllipsis()
  console.log('test :>> ', test);

  useEffect(
    () => {
      const aRefs = document.querySelectorAll('a')
      aRefs.forEach(aRef => {
        aRef.setAttribute('draggable', 'false')
      });
    }
  )

  // LOCK 
  const inputLock = new InputLock();
  inputLock.add();

  const icons = [
    "far fa-compass",
    "far fa-hand-rock",
    "far fa-chess-knight",
    "far fa-star",
    "far fa-user",
    "far fa-snowflake",
    "far fa-gem",
    "far fa-lemon",
    "far fa-folder-closed",
    "far fa-heart",
    "far fa-clock",
    "far fa-grin-squint-tears",
    "far fa-bell",
    "far fa-sun",
    "far fa-moon",
    "far fa-chess-rook",
    "far fa-hashtag",
  ];

  let backgroundIcons = [];

  function displayIcons(param) {
    param < 200 ? param = 200 : param = param + 0;
    for (let index = 0; index < param; index++) {
      const ico = Math.floor(Math.random() * icons.length);
      backgroundIcons.push(icons[ico])
    }
  }

  function sizeGrid(param) {
    let n = 0;
    let avail = 40;
    const size = param;
    while (avail < size) {
      n++;
      avail = avail + 40;
      // console.log("avail", avail);
    }
    // console.log(n);
    return n;
    // console.log(width);
  }

  let nW = sizeGrid(window.screen.availWidth);
  let nH = sizeGrid(window.screen.availHeight);
  let totalIcon = nW * nH;
  displayIcons(totalIcon);

  // console.log(totalIcon);

  return (
    <>
      <section id="my-background-icon" className="-z-50 w-screen h-screen brightness-50 text-zinc-700 fixed top-0 left-0 overflow-hidden text-xl grid justify-evenly content-evenly grid-cols-[repeat(auto-fit,minmax(40px,40px))] grid-rows-[repeat(auto-fit,minmax(40px,40px))]">
        {
          backgroundIcons.map(
            (backgroundIcon) => (<i key={backgroundIcon + Math.floor(Math.random() * 100000000)} className={`${backgroundIcon} w-10 min-w-[40px] h-10 min-h-[40px] flex justify-center items-center`}></i>)
          )
        }

      </section>
    </>
  )

};
