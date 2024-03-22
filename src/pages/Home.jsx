import { useContext } from "react"
import { Language } from "../components/createContext"

export default function Home() {
   const { lang } = useContext(Language)
   return (
      <>
         <p className="font-dela">{lang === "es" ? "HOLA, SOY UN DESARROLLADOR WEB A TU SERVICIO" : "HELLO, I'M A WEB DEVELOPER AT YOUR SERVICE"}</p>
      </>
   )
}