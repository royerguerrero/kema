import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";

export default function Header() {
  return (
    <header className=" bg-neutral-950/80 backdrop-blur fixed w-full">
      <div className="flex p-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/KEMA.svg" width={96} height={20} alt="Kema Logo" />
          <Badge>BETA</Badge>
        </div>
        <nav className="md:flex gap-4 uppercase text-sm font-IBMPlexSansCondensed font-medium text-neutral-500 whitespace-nowrap hidden">
          <Link href="/#test">Tabla Nutricional</Link>
          <Link href="/#test">Reduce tiempos</Link>
          <Link href="/#test">Comunidades</Link>
        </nav>
        <div className="flex justify-end gap-2">
          <Button className="md:hidden">Acceder</Button>
          <Button className="hidden md:block">Ingresar</Button>
          <Button variant="secondary" className="hidden md:block">
            Registrase
          </Button>
        </div>
      </div>
    </header>
  );
}
