"use client";
import React, { useState } from "react";
import { info } from "./config/info";
import { IconArrowDown } from "@/icons";

export default function Preguntas() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="max-w-md mx-auto space-y-2">
      {info.map((item, index) => (
        <div key={index} className="border rounded-md bg-gray-100">
          <button
            onClick={() => toggleExpand(index)}
            className="w-full flex items-center justify-between px-4 py-3 font-semibold text-left border-b-2 border-border"
          >
            <span>{item.pregunta}</span>
            <IconArrowDown
              className={`transition-transform duration-300 ${
                expanded === index ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {expanded === index && (
            <div className="p-4 text-primary bg-gray-100">
              {item.respuesta.map((line, i) => (
                <p key={i} className="mb-2 last:mb-0 leading-5">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

