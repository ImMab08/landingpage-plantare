import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Combos from "@/components/Combos/Combos";
import Garantia from "@/components/Garantia/Garantia";
import Preguntas from "@/components/Preguntas/Preguntas";
import Beneficios from "@/components/Beneficios/Beneficios";
import Testimonios from "@/components/Testimonios/Testimonios";
import Caracteristicas from "@/components/Caracteristicas/Caracteristicas";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col space-y-10">
      <div className="md:px-[200px] space-y-10 md:flex md:flex-col md:items-center md:justify-center">
        <div className=" flex flex-col items-center space-y-5">
          <div className="text-center mt-10 space-y-4 px-4">
            <div className="">
              <p className="text-primary font-extrabold text-xl md:text-4xl leading-7 md:w-[800px]">
                60 días para decirle ADIÓS a la caída y hola a un cabello fuerte
                y largo
              </p>
              <p className="text-primary font-extrabold text-xl md:mt-4 md:text-3xl">
                ¡Tu transformación comienza hoy!
              </p>
            </div>
            <div>
              <p className="text-primary/80 font-semibold text-sm md:text-lg">
                Fórmula natural que entiende y potencia tu cabello afro.
              </p>
              <span className="text-primary/80 font-semibold text-sm md:text-lg md:w-[50px] leading-3">
                Resultados visibles desde el primer mes o te devolvemos tu
                dinero
              </span>
            </div>
          </div>

          <button className="py-3 w-auto px-6 md:py-4 md:px-6 text-lg md:text-xl bg-secondary hover:bg-secondary/80 font-extrabold rounded-md text-white">
            <Link target="_blank" href="https://wa.me/573116576320">¡ACTIVA TU CRECIMIENTO AHORA!</Link>
          </button>
        </div>
        
          <Image 
            width={1020} 
            height={500}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
            src="/img/hero.jpeg" 
            alt="Imagen de presetación de los aceites de estimulación de plantare" />

        <div className="px-5 md:px-0">
          <Button />
        </div>

        <Beneficios />
      </div>

      <Combos />
      <div className="flex w-full py-2 items-center justify-center bg-foreground">
        <h2 className="font-extrabold text-sm md:text-xl text-white text-center">
          ENVIÓS <span className="text-secondary">GRATIS</span> + PAGO
          <span className="text-secondary"> CONTRAENTREGA</span> en{" "}
          <span className="text-secondary">CALI</span>
        </h2>
      </div>

      <div className=" flex flex-col justify-center items-center space-y-5 px-5">
        <div className="text-center space-y-4">
          <p className="text-primary font-extrabold text-xl leading-7">
            ⭐ SI DESPUÉS DE 30 DÍAS NO NOTAS EL CAMBIO TE DEVOLVEMOS TU DINERO
            ⭐
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
          <Link target="_blank" href="https://wa.me/573116576320">¡QUIERO EL MIO!</Link>
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

      <div className="text-center space-y-5 flex flex-col items-center px-5">
        <p className="text-primary font-bold text-xl md:text-2xl md:w-[780px] leading-6">
          Es un aceite de estimulación capilar 100% natural que combina
          ancestrales secretos botánicos con la más avanzada tecnología en
          cuidado capilar. Cada gota está formulada para despertar tus folículos
          capilares y promover un crecimiento saludable.
        </p>
        <p className="text-primary font-extrabold text-xl md:text-2xl">
          PODER NATURAL CONCENTRADO
        </p>
        <p className="text-primary font-semibold text-xl md:text-2xl md:w-[650px]">
          Nuestro aceite combina 15 ingredientes potentes, cada uno seleccionado
          por sus propiedades específicas:
        </p>
      </div>

      <Caracteristicas />
      <Garantia />
      <Testimonios />
      <Preguntas />
      <Footer />
    </section>
  );
}
