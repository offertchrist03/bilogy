export default function Pages({ id, classes, children }) {
  return (
    <>
      <section id={id} className={`page-items w-full px-5 sm:container min-h-[75vh] sm:px-10 md:px-0 xl:px-16 h-fit mx-auto select-none z-0 ${classes}`}>
        {children}
      </section>
    </>
  )
};
