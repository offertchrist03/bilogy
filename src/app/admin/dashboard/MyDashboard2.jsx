import { competenceData } from "../data/data";

export default function MyDashboard2() {

  const data = competenceData;

  return (
    <>
      <section id="" className="z-0 container mx-auto min-h-[77vh] sm:px-10 md:px-0 xl:px-16 relative select-none">

        <h3 id="" className="w-full text-center text-blue-400"><i className="fa fa-chart-pie"></i> <span className="text-xl font-semibold underline underline-offset-8 decoration-double capitalize ml-2">mes competences</span> </h3>

        <div id="" className="py-5">
          <table id="" className="w-fit mx-auto">
            <thead className="underline underline-offset-4">
              <tr className="w-fit h-10">
                <th className="w-20">#</th>
                <th className="w-40">type</th>
                <th className="w-44">titre</th>
                <th className="w-28">nombre</th>
                <th className="w-44">couleur</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                data.map(
                  item => (
                    <tr key={item.type + item.titre + item.number} className="w-fit h-10">
                      <td className="w-20">{item.type + item.titre + item.number}</td>
                      <td className="w-40"><input readOnly type="text" className="w-full text-center outline-none bg-transparent" value={item.type} /></td>
                      <td className="w-44"><input readOnly type="text" className="w-full text-center outline-none bg-transparent" value={item.titre} /></td>
                      <td className="w-20"><input readOnly type="text" className="w-full text-center outline-none bg-transparent" value={item.number} /></td>
                      <td className={`w-20 text-${item.color}`}><input readOnly type="text" className="w-full text-center outline-none bg-transparent" value={item.color} /> </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>

          <div className="w-full h-full flex justify-center items-center gap-5 mt-5">
            <button id="" type="button" className="w-fit h-10 px-3 text-sm uppercase font-bold bg-green-500 hover:bg-green-600 text-zinc-950 rounded"><i className="fa fa-check"></i> mettre a jour</button>
            <button id="" type="button" className="w-fit h-10 px-3 text-sm uppercase font-bold bg-red-500 hover:bg-red-600 text-zinc-950 rounded"><i className="fa fa-trash"></i> supprimer une ligne</button>
          </div>

        </div>

      </section >
    </>
  )

};
