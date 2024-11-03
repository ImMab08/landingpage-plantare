import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex flex-col w-full py-2 items-center justify-center bg-foreground px-5">
        <h2 className="font-extrabold text-sm md:text-xl text-white text-center">
          ENVIÓS <span className="text-secondary">GRATIS</span> + PAGO
          <span className="text-secondary"> CONTRAENTREGA</span> EN{" "}
          <span className="text-secondary">CALI</span>          
        </h2>
        <h2 className="text-secondary text-xs font-semibold">PROMOCIÓN VALIDA SOLO PARA LA CIUDAD DE CALI</h2>
      </div>
      <nav className="flex items-center justify-center py-2 shadow-md">
        <Image className="block md:hidden" width={130} height={130} src="/logo.png" alt="logo-plantare" />
        <Image className="hidden md:block" width={230} height={230} src="/logo.png" alt="logo-plantare" />
      </nav>
    </>
  );
}
