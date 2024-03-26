import { useContext } from "react"
import { Language } from "../components/createContext"
import { motion } from "framer-motion"

export default function Home() {
   const { lang } = useContext(Language)

   const downloadCV = () => {
      const link = document.createElement('a');
      link.href = 'src/assets/downloads/CV_Desarrollador.pdf';
      link.download = "CV_Desarrollador.pdf";
      link.click();
   }
   return (
      <section className="mt-[10%] px-[5%] flex max-lg:flex-col max-lg:items-center gap-[30px]">
         <h1 className="font-dela max-lg:text-center text-[24px]">
            {lang === "es" ? "HOLA, SOY UN" : "HELLO, I'M A"}<br />
            <span className='text-[#FFBE00]'>
               {lang === "es" ? "DESARROLLADOR WEB" : "WEB DEVELOPER"}
            </span><br />
            {lang === "es" ? "A TU SERVICIO" : "AT YOUR SERVICE"}
         </h1>
         <div className="bg-[#FFBE00] w-[15%] h-[2px] rounded-full"></div>
         <div className="relative">
            <img className="absolute top-[20%] right-[20%] z-[-1] scale-[0.45]" src="./src/assets/png/flechas_izq.png" alt="flechas" />
            <img className="absolute top-[15%] left-[25%] z-[-1] scale-[0.5] rotate-90" src="./src/assets/png/puntos.png" alt="flechas" />
            <img className="scale-[1.2] " src="./src/assets/Links/laptop.png" alt="Laptop" />
         </div>
         <h4 className="max-lg:text-center">
            {lang === "es" ? 
               "Escultor de ideas para la web, doy forma y convierto en realidad tus proyectos más ambiciosos o sencillos" 
                  : 
               "Ideas sculptor for the web, I shape and convert your most ambitious or simple projects into reality"
            }
         </h4>
         <a className="button font-dela appearance-none font-semibold"
            href = {`src/assets/downloads/${lang === "es" ? "CV_Desarrollador.pdf" : "CV_Developer.pdf"}`}
            download
            type="application/pdf"
         >
            {lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
         </a>
            <motion.button
            style={{
               width: "100px",
               height: "50px",
               border: "2px solid",
               borderImage: "linear-gradient(to right, red, orange, red) 1",
               position: "relative",
               right: 0,
            }}
            animate={{ borderImage: ["linear-gradient(to right, red, orange, red) 1", "linear-gradient(to right, orange, red, orange) 1", "linear-gradient(to right, red, orange, red) 1"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            />
      </section>
   )
}