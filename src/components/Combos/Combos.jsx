import React from "react";
import { info } from "./config/info";
import Image from "next/image";

export default function Combos() {
  return (
    <section className="">
      <div className="bg-border p-5 space-y-5">
        {info.map(
          ({
            id,
            imagen,
            titulo,
            subtitulo,
            variantes,
            span,
            caracteristicas,
          }) => (
            <div
              key={id}
              className="bg-background flex flex-col space-x-4 rounded-md p-4"
            >
              <Image
                style={{ objectFit: "contain" }}
                width={500}
                height={500}
                src={imagen}
                alt=""
              />
              <div className="mt-4">
                <h1 className="text-center text-xl font-semibold text-primary">
                  {titulo}
                </h1>
                <h2 className="text-center text-base font-semibold text-primary">
                  {subtitulo}
                </h2>
              </div>

              {span && Object.keys(span).length > 0 && (
                <div className="absolute right-[36px] mt-2 px-4 py-1 rounded-l-md bg-white">
                  <span className="font-bold text-secondary">{span}</span>
                </div>
              )}

              {/* Renderizando variantes */}
              <div className="mt-2">
                <h3 className="font-semibold">Variantes:</h3>
                <ul className="list-disc list-inside">
                  {Object.values(variantes).map((variante, index) => (
                    <li className="list-none pl-2" key={index}>
                      {variante}
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
    </section>
  );
}
