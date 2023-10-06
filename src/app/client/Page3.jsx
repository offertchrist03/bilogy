import ProjectItem from "../item/ProjectItem"
import { projectData } from "../../data/data";
import NavAdds from "../layout/NavAdds";
import Pages from "../layout/Pages";

export default function Page3() {

  const project = projectData;

  return (
    <>
      <NavAdds id="the-poject" />
      <Pages id={''} classes={''}>

        <div className="w-full h-[15vh] sm:h-[20vh] pt-2 flex items-baseline justify-between">
          <div className="w-fit h-fit">
            <h3 className="uppercase text-xs sm:text-base font-bold text-gray-400">mes petites applications</h3>
            <h2 className="lowercase text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">mes projets</h2>
          </div>
          <div className="text-right">
            <h3 className="sm:text-xl font-semibold text-yellow-500">acheve</h3>
            <h2 className="lowercase sm:text-xl lg:text-2xl font-bold text-yellow-500">{project.length < 10 ? '0' + project.length : project.length}</h2>
          </div>
        </div>

        <ul id="" className="w-full min-w-full overflow-hidden grid md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center py-10 ">

          {project.map(item => (<ProjectItem key={item.id} titre={item.titre} image={item.image} outils={item.outils} features={item.features} description={item.description} lien={item.lien} />))}

        </ul>

      </Pages>
    </>
  )

};
