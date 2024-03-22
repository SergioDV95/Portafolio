import { useContext, useState, useEffect } from "react"
import { Language } from "./createContext"
import { Squash as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion"

export default function NavBar() {
   const { lang, setLang } = useContext(Language);
   const [isOpen, setOpen] = useState();
   const variants = {
      list: {
         open: {
            width: "50%",
            height: "50vh",
            borderRadius: "0px 25px 25px 0px",
            transition: {
               when: "beforeChildren",
               staggerChildren: 0.3,
            },
         },
         close: {
            width: "63px",
            height: "63px",
            borderRadius: "100%",
            transition: {
               when: "afterChildren",
            },
         },
      },
      item: {
         open: {
            y: 0,
            opacity: 1,
            display: "block"
         },
         close: {
            y: -50,
            opacity: 0,
            display: "none"
         },
      },
   };
   return (
      <div className="flex max-lg:justify-between gap-[30px] w-full h-[65px] lg:px-[5%] lg:mt-[4%]">
         <motion.nav 
            className={`flex max-lg:flex-col lg:justify-between max-lg:gap-[5%] p-[1.5%] lg:w-[80%] lg:h-[75px] lg:rounded-full lg:items-center font-semibold bg-navbar border-[2px] border-[#E2E2E2] box-border`}
            variants={variants.list}
            animate={isOpen ? "open" : "close"}
            onClick={() => setOpen(!isOpen)}
         >
            <div className="lg:hidden">
               <Hamburger 
                  label="Show menu"
                  toggled={isOpen}
                  toggle={setOpen}
               />
            </div>
            <h1 className="font-dela text-[34px] hidden lg:flex">SERGIO DAZA</h1>
            <div className="justify-between lg:gap-[30px] max-lg:h-full max-lg:px-[5%] flex max-lg:flex-col">
               <motion.input variants={variants.item} className={`max-lg:text-start lg:block`} type="button" value={lang === "es" ? "HABILIDADES" : "SKILLS"} />
               <motion.input variants={variants.item} className={`max-lg:text-start lg:block`} type="button" value={lang === "es" ? "SOBRE MI" : "ABOUT ME"} />
               <motion.input variants={variants.item} className={`max-lg:text-start lg:block`} type="button" value={lang === "es" ? "PROYECTOS" : "PROJECTS"} />
               <motion.input variants={variants.item} className={`max-lg:text-start lg:block`} type="button" value={lang === "es" ? "PROCESOS" : "PROCESSES"} />
               <select 
                  className={`max-lg:text-start hidden lg:block delay-[2s] rounded-full w-fit bg-[#FFFFFF80] p-2 focus:outline-2 focus:outline-[#FFFFFF]`} 
                  name="lang" 
                  id="lang"
                  onChange={ e => setLang(e.target.value)}
               >
                  <option value="es">ES</option>
                  <option value="en">EN</option>
               </select>
            </div>
         </motion.nav>
         <button title="Contacto" className="border-[2px] lg:w-[15%] px-[20px] border-[#FFBE00] bg-navbutton rounded-full font-semibold" type="">
            {lang === "es" ? "CONTÁCTAME" : "CONTACT ME"}
         </button>
      </div>
   )
}