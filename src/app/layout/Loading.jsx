import { useEffect } from "react"

export default function Loading() {

  // const [load, setLoad] = useState(false)

  useEffect(
    () => {
      setTimeout(() => {
        document.getElementById('loading').classList.add('hidden')
      }, 2000);
    }, []
  )

  return (
    <>
      <section id="loading" className="select-none z-[999] w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-black/90 backdrop-blur backdrop-grayscale gap-1">
        <h2 className="w-fit h-fit uppercase font-bold text-blue-500">bilogy</h2>
        <i className="fa fa-spinner text-yellow-500 animate-spin"></i>
      </section>
    </>
  )

};
