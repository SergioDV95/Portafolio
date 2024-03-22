import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
   const style = {
      img: "absolute z-[-1] ",
   }
   return (
      <>
         <img className={style.img + "-rotate-[20deg] -top-[50px] -left-[215px] lg:-top-[150px] lg:-left-[800px] "} src="./src/assets/png/ondas_org.png" alt="" />
         <img className={style.img + "top-[10%] -left-[35%] h-[300px] scale-[1.4] "} src="./src/assets/png/proyectos.png" alt="" />
         <NavBar />
      </>
   )
}