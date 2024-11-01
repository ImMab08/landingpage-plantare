import React from "react";
import Image from "next/image";

import { info } from "./config/info";

export default function Combos() {
  return (
    <section className="">
      <div className="bg-border p-5 md:px-5 md:py-10">
        <p className="text-primary font-extrabold text-center text-2xl md:text-4xl py-5">CONOCE NUESTROS PAQUETES</p>
        <div className="md:flex md:space-y-0 md:space-x-5 md:px-10 space-y-5">
          {info.map(
            ({ id, imagen, titulo, subtitulo, variantes, span, caracteristicas }) => (
              <div
                key={id}
                className="bg-background flex flex-col space-x-4 rounded-md p-4 relative w-full h-auto"
              >
                <Image
                  width={450}
                  height={200}
                  style={{ maxWidth: 'auto', height: 'auto', borderRadius: 10, objectFit: 'cover' }}
                  src={imagen}
                  alt=""
                />
                <div className="mt-4">
                  <h1 className="text-center text-2xl font-bold text-primary">
                    {titulo}
                  </h1>
                  <h2 className="text-center text-base font-semibold text-primary">
                    {subtitulo}
                  </h2>
                </div>

                {span && Object.keys(span).length > 0 && (
                  <div className="absolute right-[15px] mt-2 px-4 py-1 rounded-l-md bg-white">
                    <span className="font-extrabold text-secondary">
                      {span}
                    </span>
                  </div>
                )}

                {/* Renderizando variantes */}
                <div className="mt-2">
                  <h3 className="font-semibold">Variantes:</h3>
                  <ul className="list-disc list-inside">
                    {Object.values(variantes).map((variante, index) => (
                      <li className="list-none pl-2" key={index}>
                        - {variante}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Renderizando características */}
                {caracteristicas && Object.keys(caracteristicas).length > 0 && (
                  <div className="mt-2">
                    <h3 className="font-semibold">Características:</h3>
                    <ul className="list-disc list-inside">
                      {Object.values(caracteristicas).map(
                        (caracteristica, index) => (
                          <li className="list-none pl-2" key={index}>
                            {caracteristica}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
