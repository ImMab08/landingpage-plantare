import Link from "next/link";
import React from "react";

export default function Button() {
  return (
    <button className="py-2 w-full md:w-auto md:px-28 md:py-3 md:text-xl bg-secondary hover:bg-secondary/80 font-extrabold rounded-md text-white">
      <Link target="_blank" href="https://wa.me/573116576320">
        OBTENER OFERTA
      </Link>
    </button>
  );
}
