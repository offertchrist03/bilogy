import { generateRandomKey } from "../../functions/UsefulFunc";
import { serviceData } from "../../data/data";
import ServiceItem from "../item/ServiceItem";
import NavAdds from "../layout/NavAdds";
import Pages from "../layout/Pages";

export default function Page3() {

  const datas = serviceData;

  return (
    <>
      <NavAdds id="the-service" />
      <Pages id={''} classes={'min-h-[70vh] h-fit'}>

        <div className="w-full h-[15vh] sm:h-[20vh] pt-2 flex items-baseline justify-between">
          <div className="w-fit h-fit">
            <h3 className="uppercase text-xs sm:text-base font-bold text-gray-400">ce que je peux vous offir</h3>
            <h2 className="lowercase text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">mes offres</h2>
          </div>
          <div className="text-right">
            <h2 className="lowercase sm:text-xl lg:text-2xl font-bold text-yellow-500"><i className="fa fa-snowflake"></i></h2>
          </div>
        </div>

        <ul id="" className="w-full min-w-full pt-5 pb-10 overflow-hidden md:overflow-visible lg:overflow-hidden grid sm:grid-cols-2 gap-5 place-items-center">

          {
            datas.map(
              (data) => (<ServiceItem titre={data.titre} image={data.image} icon={data.icon} key={generateRandomKey() + data.id} color={data.color} number={data.number} />)
            )
          }

        </ul>

      </Pages>
    </>
  )

};
