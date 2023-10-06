import { projectData } from "../data/data";
import { CheckOrNot, IconWeb } from "../functions/UsefulFunc";

export default function MyDashboard2() {

  const data = projectData;

  const showModifyParams = (param) => {
    if (document.getElementById('modification-project').classList.contains('hidden')) {
      document.getElementById('modification-project').classList.toggle('hidden');

      const inputs = document.querySelectorAll('#modification-project input');
      const textarea = document.querySelector('#modification-project textarea');

      inputs[0].value = data[param].titre;
      inputs[1].value = data[param].outils.toString();
      inputs[2].value = '';
      inputs[3].checked = data[param].features[0];
      inputs[4].checked = data[param].features[1];
      inputs[5].value = data[param].lien;

      textarea.value = data[param].description;

    } else {
      document.getElementById('modification-project').classList.toggle('hidden');
    }
  }

  const handleChange = (e) => {
    // console.log(e);
  }

  return (
    <>
      <section id="" className="z-0 container mx-auto min-h-[77vh] sm:px-10 md:px-0 xl:px-16 relative select-none">

        <h3 id="" className="w-full text-center text-blue-400"><i className="fa fa-martini-glass-citrus"></i> <span className="text-xl font-semibold underline underline-offset-8 decoration-double capitalize ml-2">mes projets</span> </h3>

        <div id="" className="py-5">
          <table id="" className="w-fit mx-auto">
            <thead className="underline underline-offset-4">
              <tr className="w-fit h-10">
                <th className="w-20">#</th>
                <th className="w-44">titre</th>
                <th className="w-28">outils</th>
                <th className="w-28">responsive</th>
                <th className="w-44">muliplateforme</th>
                <th className="w-44">action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                data.map(
                  (item, array) => (
                    <tr key={item.id} className="w-fit h-12">
                      <td className="w-20">{item.id}</td>
                      <td className="w-44">{item.titre}</td>
                      <td className="w-40 max-w-[160px] truncate">
                        <div className="w-full flex justify-center gap-2">{IconWeb(item.outils)}</div>
                      </td>
                      <td className={`w-20`}> {CheckOrNot(item.features[0])} </td>
                      <td className={`w-20`}>{CheckOrNot(item.features[1])} </td>
                      <td className={`w-20 max-w-[80px] px-2`}>
                        <button className="" onClick={() => { showModifyParams(array) }}><i className="w-10 text-blue-400 hover:text-blue-600 fa fa-cog"></i></button>
                        <button className=""><i className="w-10 text-red-400 hover:text-red-600 fa fa-trash"></i></button>
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>

        </div>

      </section >

      <section id="modification-project" className="w-full h-full fixed top-0 left-0 bg-black/80 backdrop-grayscale hidden">

        <form action="" className="w-96 mx-auto p-5 flex flex-col gap-5">
          <h3 className="w-full uppercase text-green-500 font-bold text-center underline underline-offset-4">modification</h3>
          <div className="w-full flex flex-wrap gap-1">
            <label className="underline underline-offset-2 opacity-80 block w-full">titre</label>
            <input value={''} onChange={handleChange} readOnly type="text" className="w-full bg-gray-800 outline-none p-2" />
          </div>
          <div className="w-full flex flex-wrap gap-1">
            <label className="underline underline-offset-2 opacity-80 block w-full">outils: </label>
            <input value={''} onChange={handleChange} readOnly type="text" className="bg-transparent w-full h-fit" />
            <input value={''} onChange={handleChange} readOnly type="text" className="w-[71%] bg-gray-800 outline-none p-2" />
            <button className="w-[13%] p-2 bg-blue-500 hover:bg-blue-600" type="button"><i className="fa fa-arrows-up-to-line "></i></button>
            <button className="w-[13%] p-2 bg-red-500 hover:bg-red-600" type="button"><i className="fa fa-trash"></i></button>
          </div>
          <div className="">
            <label className="underline underline-offset-2 opacity-80 block w-full">outils: </label>
            <ul className="">
              <li className="">
                <span className="w-1/2 inline-block">responsive</span>
                <input value={''} onChange={handleChange} readOnly type="checkbox" name="" id="" className="outline-none border-none" />
              </li>
              <li className="">
                <span className="w-1/2 inline-block">multiplateforme</span>
                <input value={''} onChange={handleChange} readOnly type="checkbox" name="" id="" className="outline-none border-none" />
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-wrap gap-1">
            <label className="underline underline-offset-2 opacity-80 block w-full">description: </label>
            <textarea value={'ok'} onChange={handleChange} readOnly name="" id="" className="w-full p-2 outline-none h-20 overflow-hidden resize-none bg-gray-800"></textarea>
          </div>
          <div className="w-full flex flex-wrap gap-1">
            <label className="underline underline-offset-2 opacity-80 block w-full">lien</label>
            <input value={''} onChange={handleChange} readOnly type="text" className="w-full bg-gray-800 outline-none p-2" />
          </div>

          <div className="w-full h-full flex justify-center items-center gap-5">
            <button id="" type="button" className="w-fit h-10 px-3 text-sm uppercase font-bold bg-green-500 hover:bg-green-600 text-zinc-950 rounded"><i className="fa fa-check"></i> mettre a jour</button>
            <button id="" type="button" className="w-fit h-10 px-3 text-sm uppercase font-bold bg-red-500 hover:bg-red-600 text-zinc-950 rounded" onClick={showModifyParams}><i className="fa fa-x"></i> annuler</button>
          </div>

        </form>

      </section>
    </>
  )

};
