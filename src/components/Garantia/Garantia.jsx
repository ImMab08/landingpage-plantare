import React from "react";
import { info } from "./config/info";

export default function Garantia() {
  return (
    <div  className="bg-border p-5 space-y-5">
      {info.map(({ id, icon, descripcion }) => (
        <div key={id} className="bg-background flex items-center space-x-4 rounded-md py-2 px-4">
          {icon}
          <p className="text-primary text-[12px] leading-3">{descripcion}</p>
        </div>
      ))}
    </div>
  );
}
