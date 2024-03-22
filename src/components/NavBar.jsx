import { useContext, useState } from "react"
import { Language } from "./createContext"
import { Squash as Hamburger } from 'hamburger-react'

export default function NavBar() {
   const { lang, setLang } = useContext(Language)
   const [isOpen, setOpen] = useState(false)
   const styles = {
      open: "opacity-100 translate-y-0 animation-navbarOpen",
      false: "opacity-0 -translate-y-[100px] animation-navbarClose",
   }
   return (
      <div className="flex max-lg:justify-between gap-[30px] w-full h-[65px] lg:px-[5%] lg:mt-[4%]">
         <nav className="flex max-lg:flex-col lg:justify-between max-lg:gap-[5%] p-[1.5%] w-[50%] h-[50vh] lg:w-[80%] lg:h-[75px] lg:rounded-full lg:items-center font-semibold bg-navbar border-[2px] border-[#E2E2E2] box-border">
            <div className="lg:hidden">
               <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" />
            </div>
            <h1 className="font-dela text-[34px] hidden lg:flex">SERGIO DAZA</h1>
            <div className="justify-between lg:gap-[30px] max-lg:h-full max-lg:px-[5%] flex max-lg:flex-col">
               <input className={`${isOpen ? styles.open : styles.false} transition-[opacity 2s, transform 2s] delay-[1.2s] max-lg:text-start hidden lg:block`} type="button" value={lang === "es" ? "HABILIDADES" : "SKILLS"} />
               <input className={`${isOpen ? styles.open : styles.false} transition-[opacity 2s, transform 2s] delay-[1.4s] max-lg:text-start hidden lg:block`} type="button" value={lang === "es" ? "SOBRE MI" : "ABOUT ME"} />
               <input className={`${isOpen ? styles.open : styles.false} transition-[opacity 2s, transform 2s] delay-[1.6s] max-lg:text-start hidden lg:block`} type="button" value={lang === "es" ? "PROYECTOS" : "PROJECTS"} />
               <input className={`${isOpen ? styles.open : styles.false} transition-[opacity 2s, transform 2s] delay-[1.8s] max-lg:text-start hidden lg:block`} type="button" value={lang === "es" ? "PROCESOS" : "PROCESSES"} />
               <select 
                  className={`${isOpen ? styles.open : styles.false} transition-[opacity 2s, transform 2s] delay-[2s] rounded-full w-fit bg-[#FFFFFF80] p-2 focus:outline-2 focus:outline-[#FFFFFF] hidden lg:block`} 
                  name="lang" 
                  id="lang"
                  onChange={(e) => setLang(e.target.value)}
               >
                  <option value="es">ES</option>
                  <option value="en">EN</option>
               </select>
            </div>
         </nav>
         <button title="Contacto" className="border-[2px] lg:w-[15%] px-[20px] border-[#FFBE00] bg-navbutton rounded-full font-semibold" type="">
            {lang === "es" ? "CONTÁCTAME" : "CONTACT ME"}
         </button>
      </div>
   )
}