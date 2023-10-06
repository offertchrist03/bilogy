import { createArrayNumber, generateRandomKey } from "../../functions/UsefulFunc"

export default function ServiceItem({ image = 'sli icon-globe-alt', titre = '', number = 5, color = 'blue-500', icon = 'sli icon-mustache' }) {

  const icoArray = createArrayNumber(number)

  return (
    <>
      <li className="w-full lg:w-4/5 min-h-[80px] h-48 border border-gray-600 hover:brightness-150 rounded-sm flex flex-col justify-center items-center gap-2 relative cursor-pointer">
        <i className={`text-4xl ${image} text-gray-400`}></i>
        <h2 className="uppercase font-semibold">{titre}</h2>
        <h3 className="text-2xl flex items-center gap-3">
          {
            icoArray.map(
              () => (<i key={generateRandomKey()} className={`${icon} text-${color}`}></i>)
            )
          }
        </h3>
      </li>
    </>
  )
};
