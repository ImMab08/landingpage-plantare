import Beneficios from "@/components/Beneficios/Beneficios";
import Combos from "@/components/Combos/Combos";
import Garantia from "@/components/Garantia/Garantia";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col space-y-10">
      <div className=" flex flex-col items-center space-y-5">
        <div className="text-center mt-10 space-y-4 px-5">
          <div>
            <p className="text-primary font-bold text-xl">
              60 días para decirle adiós a la caída y hola a un cabello fuerte y
              largo
            </p>
            <p className="text-primary font-bold text-xl">
              ¡Tu transformación comienza hoy!
            </p>
          </div>
          <div>
            <p className="text-primary/80 font-semibold text-sm">
              Fórmula natural que entiende y potencia tu cabello afro.
            </p>
            <span className="text-primary/80 font-semibold text-sm">
              Resultados visibles desde el primer mes o te devolvemos tu dinero
            </span>
          </div>
        </div>

        <button className="py-3 px-5 text-lg bg-secondary hover:bg-secondary/80 font-semibold rounded-md text-white">
          ¡ACTIVA TU CRECIMIENTO AHORA!
        </button>
      </div>

      <div></div>

      <Beneficios />

      <div className=" flex flex-col justify-center items-center space-y-5">
        <div className="text-center mt-10 space-y-4">
          <p className="text-primary font-bold text-2xl">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        <button className="py-2 px-4 bg-secondary hover:bg-secondary/80 font-semibold rounded-md text-white">
          Comprar ahora
        </button>
      </div>

      <Garantia />
      <Combos />

      <div className="flex w-full h-10 items-center justify-center bg-foreground">
        <h2 className="font-bold text-sm text-white">
          ENVIÓS <span className="text-secondary">GRATIS</span> + PAGO
          <span className="text-secondary"> CONTRAENTREGA</span> en{" "}
          <span className="text-secondary">CALI</span>
        </h2>
      </div>

      <div className=" flex flex-col justify-center items-center space-y-5">
        <div className="text-center mt-10 space-y-4">
          <p className="text-primary font-bold text-2xl">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        <button className="py-2 px-4 bg-secondary hover:bg-secondary/80 font-semibold rounded-md text-white">
          ¡QUIERO LO MIO!
        </button>
      </div>
    </section>
  );
}
