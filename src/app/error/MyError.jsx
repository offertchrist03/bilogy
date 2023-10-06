import { Link, Outlet } from "react-router-dom";

export default function MyError({ color = 'yellow', type = 'error 404', description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni.', linkRef = '/', link = 'revenir a l\'accueil' }) {
  return (
    <>
      <section id="" className="z-10 w-full h-full p-5 fixed top-0 left-0 bg-zinc-950 text-zinc-50 select-none flex justify-center items-center">

        <div className={`w-full sm:max-w-sm h-72 outline outline-${color}-500/50 bg-black rounded-sm flex flex-col justify-center items-center gap-2`}>
          <div className="text-center">
            <h3 className={`text-${color}-400 animate-pulse uppercase font-semibold`}>
              {color === 'yellow' ? 'oups' : 'attention'}
              <i className={`${color === 'yellow' ? "far fa-sad-tear " : "fa fa-warning "} ml-1`}></i></h3>
            <h2 className="text-xl uppercase">{type}</h2>
          </div>
          <p className="w-[80%] text-gray-400 text-center">
            {description}
          </p>

          {
            link && <Link to={linkRef} className="hover:text-blue-400 "><i className="sli icon-action-undo"></i> <span className="underline underline-offset-2">{link}</span></Link>
          }

        </div>

      </section>
      <Outlet />
    </>
  )
};
