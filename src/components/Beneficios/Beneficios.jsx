import React from "react";
import { info } from "./config/info";

export default function Beneficios() {
  return (
    <div  className="space-y-2 px-5">
      {info.map(({ id, icon, descripcion }) => (
        <div key={id} className="flex space-x-2 items-center">
          {icon}
          <p className="text-sm text-primary">{descripcion}</p>
        </div>
      ))}
    </div>
  );
}
