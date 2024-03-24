import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
   return (
      <>
         <img className="absolute z-[-1] -rotate-[20deg] -top-[10px] -left-[200px] lg:-top-[150px] lg:-left-[800px]" src="./src/assets/png/ondas_org.png" alt="" />
         <img className="absolute z-[-1] top-[10%] -left-[35%] h-[300px] scale-[1.4]" src="./src/assets/png/proyectos.png" alt="" />
         <NavBar />
      </>
   )
}