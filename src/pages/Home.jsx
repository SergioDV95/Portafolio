import { useContext, useEffect, useState } from "react"
import { Language } from "../components/createContext"
import { motion } from "framer-motion"

export default function Home() {
   const { lang } = useContext(Language);
   const [text, setText] = useState({
      aboutMe: [],
   });

   const textSelector = () => {
      return text.aboutMe.map((txt, index) => (
         <div key={index} className="last-of-type:font-bold">
            <p>{txt}</p><br />
         </div>
      ));
   }

   useEffect(() => {
      if (lang === "es") {
         setText(text => ({...text, aboutMe: [
            "Desarrollador Web Full Stack Jr., cuento con experiencia en el desarrollo de aplicaciones web dinámicas y responsivas.",
            "Me apasiona el aprendizaje continuo y la mejora de mis habilidades técnicas y creativas. Tengo capacidad para trabajar en equipo, resolver problemas y adaptarme a diferentes requisitos y tecnologías.",
            "Mi objetivo es crear soluciones web innovadoras y de calidad que satisfagan las necesidades de los usuarios y los clientes.",
         ]}));
      } else {
         setText(text => ({...text, aboutMe: [
            "Full Stack Web Developer Jr., I have experience in developing dynamic and responsive web applications.",
            "I am passionate about continuous learning and improving my technical and creative skills. I have the ability to work in a team, solve problems and adapt to different requirements and technologies.",
            "My goal is to create innovative and quality web solutions that meet the needs of users and clients.",
         ]}));
      }
   }, [lang]);

   return (
      <section className="mt-[10%] px-[5%] flex max-lg:flex-col gap-[5%] h-[100rem] ">
         <div className="flex max-lg:flex-col gap-[30px] max-lg:items-center">
            <h1 className="font-dela max-lg:text-center text-[24px]">
               {lang === "es" ? "HOLA, SOY UN" : "HELLO, I'M A"}<br />
               <span className='text-[#FFBE00]'>
                  {lang === "es" ? "DESARROLLADOR WEB" : "WEB DEVELOPER"}
               </span><br />
               {lang === "es" ? "A TU SERVICIO" : "AT YOUR SERVICE"}
            </h1>
            <div className="bg-[#FFBE00] w-[15%] h-[2px] rounded-full"></div>
            <div className="relative">
               <img className="absolute top-[20%] right-[20%] z-[-1] scale-[0.45]" src="./src/assets/png/dark/flechas_izq.png" alt="flechas" />
               <img className="absolute top-[15%] left-[25%] z-[-1] scale-[0.5] rotate-90" src="./src/assets/png/dark/puntos.png" alt="flechas" />
               <img className="scale-[1.2] " src="./src/assets/Links/laptop.png" alt="Laptop" />
            </div>
            <h4 className="max-lg:text-center">
               {lang === "es" ? 
                  "Escultor de ideas para la web, doy forma y convierto en realidad tus proyectos más ambiciosos o sencillos" 
                     : 
                  "Ideas sculptor for the web, I shape and convert your most ambitious or simple projects into reality"
               }
            </h4>
            <a className="font-dela bg-navbarDesktop p-[10px] rounded-[8px] border border-white appearance-none font-semibold"
               href = {`src/assets/downloads/${lang === "es" ? "CV_Desarrollador.pdf" : "CV_Developer.pdf"}`}
               download
               type="application/pdf"
            >
               <h4 className="">
                  {lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
               </h4>
            </a>
         </div>
         <div className="flex max-lg:flex-col gap-[30px] max-lg:items-center">
            <figure className="relative mt-[15%] w-[175px] h-[175px] rounded-full bg-picture overflow-visible">
               <img className="scale-[1.20] z-50 -rotate-[2deg] absolute bottom-[10%] " src="./src/assets/png/sergio-daza.png" alt="Yo"/>
               <img className="scale-[2]" src={lang === "es" ? "./src/assets/png/ES/dark/sobre_mi.png" : "./src/assets/png/EN/dark/about_me.png"} alt="" />
            </figure>
            <h1 className="font-dela max-lg:text-center text-[24px]">
               {lang === "es" ? "SOBRE MÍ" : "ABOUT ME"}
            </h1>
            <div className="bg-[#FFBE00] w-[15%] h-[2px] rounded-full"></div>
            <div className="text-center leading-[22px] px-[5%] ">
               {textSelector()}
            </div>
         </div>
      </section>
   )
}