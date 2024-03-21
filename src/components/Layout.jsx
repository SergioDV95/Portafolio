import { Outlet } from "react-router-dom";

export default function Layout() {
   const style = {
      img: "rotate-[-20deg] absolute z-[-1] -top-[80%] -left-[55%] ",
   }
   return (
      <>
         <Outlet />
         <img className={style.img} src="./src/assets/png/Recurso_17.png" alt="" />
      </>
   )
}