import { useContext, useState, useEffect } from "react"
import { Language, Mode } from "./createContext"
import { Squash as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion"

export default function NavBar() {
   const { lang, setLang } = useContext(Language);
   const { mode, setMode } = useContext(Mode);
   const [isOpen, setOpen] = useState();
   const [lgWidth, setLgWidth] = useState(window.innerWidth >= 1024);

   useEffect(() => {
      const mediaQueryList = window.matchMedia('(min-width: 1024px)');
      function handleResize() {
         if (mediaQueryList.matches) {
            setLgWidth(true);
         } else {
            setLgWidth(false);
         }
      }
      handleResize();
      mediaQueryList.addEventListener("change", handleResize);
      return () => {
         mediaQueryList.removeEventListener("change", handleResize);
      };
   }, []);

   const variants = {
      list: {
         open: {
            width: "80%",
            height: "100vh",
            transition: {
               when: "beforeChildren",
               staggerChildren: 0.1,
            },
         },
         closed: {
            width: "63px",
            height: "63px",
            transition: {
               when: "afterChildren",
               staggerChildren: 0.05,
               staggerDirection: -1,
            },
         },
      },
      item: {
         open: {
            y: 0,
            opacity: 1,
            display: 'flex',
            transition: {
               display: { delay: -0.5 },
               type: "spring"
            }
         },
         closed: {
            y: -50,
            opacity: 0,
            display: "none",
            transition: { 
               display: { delay: 0.5 },
            },
         },
      },
   };

   const styles = {
      list: lgWidth ? {
         width: "80%",
         height: "60px",
      } : {
         width: "fit-content",
         height: "fit-content",
      },
      item: lgWidth ? {
         display: "flex",
      } : {
         display: "none",
      }
   };

   const inputElements = () => {
      const inputValues = [
         `${lang === "es" ? "HABILIDADES" : "SKILLS"}`,
         `${lang === "es" ? "SOBRE MI" : "ABOUT ME"}`, 
         `${lang === "es" ? "PROYECTOS" : "PROJECTS"}`,
         `${lang === "es" ? "PROCESOS" : "PROCESSES"}`
      ];
      return inputValues.map((value, index) => (
         <motion.input 
            className="max-lg:h-[60px] max-lg:text-left max-lg:pt-[30px] flex max-lg:border-b-[1px] border-[#D9D9D9] focus:outline-none"
            key={value + index} 
            style={styles.item} 
            variants={variants.item}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            type="button" 
            value={value} 
         />
      ));
   };
   return (
      <div className="flex max-lg:justify-end text-end gap-[30px] w-full max-lg:p-[5%] lg:px-[5%] lg:mt-[4%] relative">
         <motion.nav 
            layout
            className={`flex max-lg:absolute max-lg:left-[5%] max-lg:z-50 max-lg:flex-col rounded-[8px] max-lg:gap-[2%] p-[1.5%] lg:items-center lg:justify-between font-semibold bg-navbarMobile lg:bg-navbarDesktop border-[2px] border-[#E2E2E2] box-border`}
            variants={variants.list}
            animate={lgWidth ? "" : (isOpen ? "open" : "closed")}
            initial={styles.list}
            whileTap={lgWidth ? "" : (isOpen ? "" : { scale: 0.9 })}
         >
            <div className="lg:hidden">
               <Hamburger 
                  label="Show menu"
                  toggled={isOpen}
                  toggle={setOpen}
                  easing="ease-in"
               />
            </div>
            <motion.h1 variants={lgWidth ? "" : variants.item} style={styles.item} className="max-lg:px-[5%] font-dela max-lg:text-start text-[28px] lg:text-[34px] max-lg:mb-[10%]">SERGIO DAZA</motion.h1>
            <div className="max-lg:h-full max-lg:px-[5%] flex max-lg:flex-col lg:gap-[30px]">
               <motion.select 
                  className="max-lg:text-start text-[20px] rounded-[8px] w-fit bg-[#FFFFFF33] shadow-button p-2 focus:outline-none"
                  style={styles.item}
                  variants={variants.item}
                  title="Idioma"
                  name="lang" 
                  id="lang"
                  onChange={ e => setLang(e.target.value)}
                  value={lang}
               >
                  <option value="es">ESPAÑOL</option>
                  <option value="en">ENGLISH</option>
               </motion.select>
               {inputElements()}
            </div>
            <motion.div
               style={styles.item}
               variants={variants.item}
               className="flex gap-[10px]"
            >
               <h4 className="flex items-center">
                  {lang === "es" ? "Claro" : "Light"}
               </h4>
               <motion.div 
                  className="rounded-full bg-button shadow-button w-[65px] h-[33px] p-[4px]"
                  onClick={() => setMode(mode => {mode = (mode === "light" ? "dark" : "light"); console.log(mode); return mode})}
               >
                  <motion.div 
                     className="rounded-full bg-[#FFFFFF] w-[45%] h-full"
                     animate={{ 
                        x: mode === "light" ? 0 : 31,
                        background: mode === "light" ? "#FFFFFF" : "#262626"
                     }}
                  ></motion.div>
               </motion.div>
               <h4 className="flex items-center">
                  {lang === "es" ? "Oscuro" : "Dark"}
               </h4>
            </motion.div>
         </motion.nav>
         <motion.button 
            className="border-[2px] h-[63px] lg:h-[60px] lg:w-[15%] px-[20px] border-[#FFBE00] bg-navbutton rounded-[8px] font-semibold" 
            whileTap={{ scale: 0.9 }} 
            whileHover={{ scale: 1.1 }} 
            title="Contacto" 
            type="button"
         >
            {lang === "es" ? "CONTÁCTAME" : "CONTACT ME"}
         </motion.button>
      </div>
   )
}