import React from "react";
import { info } from "./config/info";

export default function Caracteristicas() {
  return (
    <div className="p-5 space-y-8 text-primary">
      {info.map((section, index) => (
        <div key={index} className="space-y-2">
          {section.category && (
            <h2 className="text-2xl font-bold">{section.category}</h2>
          )}

          {section.items && (
            <ul className="">
              {section.items.map((item) => (
                <li key={item.id} className="flex items-start space-x-2">
                  <span className="font-semibold">{item.name}:</span>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          )}

          {section.section && (
            <h2 className="text-2xl font-bold">{section.section}</h2>
          )}

          {section.steps && (
            <ol className="list-decimal list-inside space-y-2">
              {section.steps.map((step) => (
                <li key={step.id}>
                  <span className="font-semibold">{step.title}: </span>
                  <ul className="pl-5 list-disc list-inside">
                    {step.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          )}

          {section.frequency && (
            <div>
              <h3 className="font-semibold text-lg">Frecuencia:</h3>
              <ul className="space-y-1">
                {section.frequency.map((freq, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{freq.level}:</span>{" "}
                    {freq.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {section.applicationSteps && (
            <div>
              <h3 className="font-semibold text-lg">Aplicación en 3 pasos:</h3>
              <ol className="list-decimal list-inside space-y-1">
                {section.applicationSteps.map((step) => (
                  <li key={step.id}>{step.step}</li>
                ))}
              </ol>
            </div>
          )}

          {section.timeline && (
            <div>
              <h3 className="font-semibold text-lg">Resultados Esperados:</h3>
              <ul className="space-y-1">
                {section.timeline.map((result, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{result.month}:</span>{" "}
                    {result.result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {section.details && (
            <div>
              <h3 className="font-semibold text-lg">Compatible con:</h3>
              <ul className="list-disc list-inside space-y-1">
                {section.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {section.precautions && (
            <div>
              <h3 className="font-semibold text-lg">Importante:</h3>
              <ul className="list-disc list-inside space-y-1">
                {section.precautions.map((precaution, idx) => (
                  <li key={idx}>{precaution}</li>
                ))}
              </ul>
            </div>
          )}

          {section.benefits && (
            <div>
              <h3 className="font-semibold text-lg">Cada compra incluye:</h3>
              <ul className="list-disc list-inside space-y-1">
                {section.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
