/* eslint-disable @next/next/no-img-element */
import React from "react";
import { info } from "./config/info";

export default function Testimonios() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-5">
        <h2 className="text-primary text-2xl md:text-4xl font-extrabold text-center leading-6">
          LO QUE DICEN <br />
          NUESTROS CLIENTES
        </h2>
      </div>

      <div className="w-full p-5 flex items-center justify-center bg-border">
        <img className="h-auto max-w-full" src="/img/testimonios.png" alt="" />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        {info.map(({ nombre, texto, icon, audio }) => (
          <div key={nombre} className="p-6 border-border border-2 rounded-md">
            <div className="flex items-center mb-4 space-x-2">
              {icon}
              <div>
                <h3 className="font-semibold text-primary">{nombre}</h3>
              </div>
            </div>
            <p className="text-primary mb-4">{texto}</p>
            <audio controls className="w-full">
              <source src={audio} type="audio/mpeg" />
              Tu navegador no soporta la reproducción de audio.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
