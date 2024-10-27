import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex w-full h-10 items-center justify-center bg-foreground">
        <h2 className="font-bold text-sm text-white">
          ENVIÓS <span className="text-secondary">GRATIS</span> + PAGO
          <span className="text-secondary"> CONTRAENTREGA</span> en{" "}
          <span className="text-secondary">CALI</span>
        </h2>
      </div>
      <nav className="flex items-center justify-center py-5 border-b-2 border-border">
        <Image width={130} height={130} src="/logo.png" alt="logo-plantare" />
      </nav>
    </>
  );
}
