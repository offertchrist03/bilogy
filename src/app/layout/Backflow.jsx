export default function Backflow({ params, children }) {

  if (params !== 'hidden') {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <section id="" className={`${params} z-50 w-full h-full bg-zinc-950/50 backdrop-blur-sm backdrop-grayscale fixed top-0 left-0 justify-center items-center`}>{children}</section>
  )
};
