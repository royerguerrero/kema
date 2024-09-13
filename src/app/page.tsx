import Image from "next/image"
import Header from "@/app/_components/landing/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="h-dvh tracking-tight p-4 flex flex-col-reverse gap-3 md:justify-end m-auto md:flex-col">
          <h2 className="uppercase font-black text-4xl md:text-6xl lg:text-7xl hidden md:block">
            No medir tu progreso <br /> te hace perder motivación
          </h2>
          <Image src="/KEMA.svg" className="w-full md:hidden animate-pulse" width={96} height={20} alt="Kema Logo" />
          <div
            className="border rounded-xl h-[45vh] md:h-[50vh] bg-cover bg-center flex items-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1452573992436-6d508f200b30?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="md:w-4/6 lg:w-4/5 leading-tight font-semibold text-xl md:text-4xl lg:6xl mt-10 rounded-b-xl bg-gradient-to-t from-neutral-950 to-neutral-950/10 p-3">
              <h1 className="mr-1 inline">Kema</h1>
              <h2 className="inline">
                permite el seguimiento de tu nutrición para que logres mejorar
                tiempos, reducir de peso y mantenerte motivado
              </h2>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-4 pb-3 text-neutral-500 font-IBMPlexSansCondensed uppercase flex text-xs justify-between md:text-sm">
        <p className="whitespace-nowrap">© Kema. {new Date().getFullYear()}</p>
        <p className="text-right text-balance">Designed in Latam by CodeNewt. Assembled in the web</p>
      </footer>
    </>
  );
}
