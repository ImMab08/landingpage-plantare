import Beneficios from "@/components/Beneficios/Beneficios";
import Button from "@/components/Button";
import Caracteristicas from "@/components/Caracteristicas/Caracteristicas";
import Combos from "@/components/Combos/Combos";
import Garantia from "@/components/Garantia/Garantia";
import Preguntas from "@/components/Preguntas/Preguntas";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col space-y-10">
      <div className=" flex flex-col items-center space-y-5">
        <div className="text-center mt-10 space-y-4 px-5 md:px-20">
          <div className="">
            <p className="text-primary font-extrabold text-xl md:text-3xl leading-7">
              60 días para decirle adiós a la caída y hola a un cabello fuerte y
              largo
            </p>
            <p className="text-primary font-extrabold text-xl">
              ¡Tu transformación comienza hoy!
            </p>
          </div>
          <div>
            <p className="text-primary/80 font-semibold text-sm">
              Fórmula natural que entiende y potencia tu cabello afro.
            </p>
            <span className="text-primary/80 font-semibold text-sm leading-3">
              Resultados visibles desde el primer mes o te devolvemos tu dinero
            </span>
          </div>
        </div>

        <button className="py-3 px-5 text-lg bg-secondary hover:bg-secondary/80 font-extrabold rounded-md text-white">
          ¡ACTIVA TU CRECIMIENTO AHORA!
        </button>
      </div>

      <div></div>

      <div className="px-5">
        <Button />
      </div>

      <Beneficios />
      <Combos />

      <div className="flex w-full py-2 items-center justify-center bg-foreground">
        <h2 className="font-extrabold text-sm text-white">
          ENVIÓS <span className="text-secondary">GRATIS</span> + PAGO
          <span className="text-secondary"> CONTRAENTREGA</span> en{" "}
          <span className="text-secondary">CALI</span>
        </h2>
      </div>

      <div className=" flex flex-col justify-center items-center space-y-5 px-5">
        <div className="text-center space-y-4">
          <p className="text-primary font-extrabold text-xl leading-7">
            ⭐ SI DESPUÉS DE 30 DÍAS NO NOTAS EL CAMBIO TE DEVOLVEMOS TU DINERO ⭐
          </p>
        </div>

        <div className="text-center">
          <p className="text-primary font-extrabold text-2xl">
            ¡LA OFERTA ACABARÁ PRONTO!
          </p>
          <p className="text-primary font-bold text-xl leading-6">
            Tenemos existencias limitadas y el descuento caducará{" "}
            <span className="font-bold">¡pronto!</span>
          </p>
        </div>

        <button className="py-2 w-full bg-secondary hover:bg-secondary/80 font-extrabold rounded-md text-white">
          ¡QUIERO LO MIO!
        </button>
      </div>

      <div className="flex w-full items-center justify-center bg-foreground px-5 py-2">
        <h2 className="font-extrabold text-xs text-white text-center">
          ¿Qué es el{" "}
          <span className="text-secondary">
            {" "}
            ACEITE DE ESTIMULACIÓN DEL CRECIMIENTO DE PLANTARE{" "}
          </span>{" "}
          y cómo
          <span className="text-secondary"> FUNCIONA</span>?
        </h2>
      </div>

      <div className=" flex flex-col px-5">
        <div className="text-center space-y-5">
          <p className="text-primary font-bold text-xl leading-6">
            Es un aceite de estimulación capilar 100% natural que combina
            ancestrales secretos botánicos con la más avanzada tecnología en
            cuidado capilar. Cada gota está formulada para despertar tus
            folículos capilares y promover un crecimiento saludable.
          </p>
          <p className="text-primary font-extrabold text-xl">
            PODER NATURAL CONCENTRADO
          </p>
          <p className="text-primary font-semibold text-xl">
            Nuestro aceite combina 15 ingredientes potentes, cada uno
            seleccionado por sus propiedades específicas:
          </p>
        </div>
      </div>

      <Caracteristicas />
      <Garantia />
      <Preguntas />
    </section>
  );
}
