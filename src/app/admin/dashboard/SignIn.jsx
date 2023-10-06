export default function SignIn() {

  return (
    <>
      <section className="z-0 container mx-auto min-h-[77vh] sm:px-10 md:px-0 xl:px-16 relative select-none flex justify-center items-center">
        <form action="" id="" className="w-80 h-fit bg-slate-800 rounded border border-slate-700 p-5 pb-10 flex flex-col gap-2">
          <h2 className="w-full h-10 mb-2 lowercase text-green-500 text-2xl underline underline-offset-8 decoration-double flex justify-center items-center font-semibold">connexion</h2>
          <div id="" className="w-full flex flex-col">
            <label htmlFor="nom-connexion" className="">admin</label>
            <input type="text" id="nom-connexion" className="w-full p-2 bg-gray-600 outline-none rounded-sm" />
          </div>
          <div id="" className="w-full flex flex-col">
            <label htmlFor="pass-connexion" className="">mot de passe</label>
            <input type="text" id="pass-connexion" className="w-full p-2 bg-gray-600 outline-none rounded-sm" />
          </div>
          <button className="w-full h-10 mt-2 bg-blue-500 rounded hover:bg-blue-600 text-black uppercase font-bold text-sm">soumettre</button>
        </form>
      </section>
    </>
  )

};
