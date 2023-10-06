import { profileData } from "../data/data";

export default function MyDashboard1() {

  const data = profileData;
  const contacts = data.contact;

  return (
    <>
      <section id="" className="z-0 container mx-auto min-h-[77vh] sm:px-10 md:px-0 xl:px-16 relative select-none">

        <form action="" id="" className="w-full h-full flex flex-wrap gap-5 py-5">

          <h3 id="" className="w-full text-center text-blue-400"> <i className="fa fa-contact-card"></i> <span className="text-xl font-semibold underline underline-offset-8 decoration-double capitalize ml-2"> mon profile</span> </h3>

          <div id="" className="flex-1 p-5 bg-zinc-800 rounded flex flex-col gap-2 items-center">
            <table id="" className="w-full">
              <tbody className="">
                <tr className="">
                  <th className="min-w-[160px] max-w-[160px] w-40 h-10 truncate font-semibold underline underline-offset-2 opacity-80">nom</th>
                  <td className="min-w-[224px] max-w-[224px] w-56 truncate"><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={data.nom} /></td>
                </tr>
                <tr className="">
                  <th className="min-w-[160px] max-w-[160px] w-40 h-10 truncate font-semibold underline underline-offset-2 opacity-80">prenom</th>
                  <td className="min-w-[224px] max-w-[224px] w-56 truncate"><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={data.prenom} /></td>
                </tr>
                <tr className="">
                  <th className="min-w-[160px] max-w-[160px] w-40 h-10 truncate font-semibold underline underline-offset-2 opacity-80">pseudo</th>
                  <td className="min-w-[224px] max-w-[224px] w-56 truncate"><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={data.pseudo} /></td>
                </tr>
                <tr className="">
                  <th className="min-w-[160px] max-w-[160px] w-40 h-10 truncate font-semibold underline underline-offset-2 opacity-80">date de naissance</th>
                  <td className="min-w-[224px] max-w-[224px] w-56 truncate"><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={data.date_naissance} /></td>
                </tr>
                <tr className="">
                  <th className="min-w-[160px] max-w-[160px] w-40 h-10 truncate font-semibold underline underline-offset-2 opacity-80">lieu de naissance</th>
                  <td className="min-w-[224px] max-w-[224px] w-56 truncate"><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={data.lieu_naissance} /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="" className="w-full max-w-sm bg-zinc-800 py-5 px-10 rounded">
            <ul id="" className="flex flex-col gap-1">
              <li className="font-semibold underline underline-offset-2 opacity-80 mt-1">email</li>
              {
                contacts.email.map(tar => (<li key={tar.email + tar} className=""><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={tar} /></li>))
              }
              <li className="font-semibold underline underline-offset-2 opacity-80 mt-1">github</li>
              {
                contacts.github.map(tar => (<li key={tar.email + tar} className=""><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={tar} /></li>))
              }
              <li className="font-semibold underline underline-offset-2 opacity-80 mt-1">telephone</li>
              {
                contacts.telephone.map(tar => (<li key={tar.email + tar} className=""><input readOnly type="text" className="w-full h-full bg-transparent outline-none" value={tar} /></li>))
              }

            </ul>
          </div>

          <div className="w-full flex-1 py-5 px-3">
            <h6 className="font-semibold underline underline-offset-2 opacity-80">bio</h6>
            <textarea name="" id="" className="w-full h-full outline-none resize-none bg-transparent" value={data.bio} readOnly></textarea>
          </div>

          <div className="w-full h-full flex justify-center items-center gap-5">
            <button id="" type="button" className="w-fit h-10 px-3 text-sm uppercase font-bold bg-green-500 hover:bg-green-600 text-zinc-950 rounded"><i className="fa fa-check"></i> modifier</button>
            <button id="" type="button" className="w-fit h-10 px-3 text-sm uppercase font-bold bg-red-500 hover:bg-red-600 text-zinc-950 rounded"><i className="fa fa-x"></i> annuler</button>
          </div>

        </form>

      </section >
    </>
  )

};
