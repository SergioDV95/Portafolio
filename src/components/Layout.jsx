import { Outlet } from "react-router-dom";

export default function Layout() {
   const style = {
      img: "rotate-[-20deg] absolute z-[-1]",
   }
   return (
      <>
         <Outlet />
         <img className={style.img} src="./src/assets/png/Recurso_17.png#xywh=50%,50%,500,500" alt="" />
      </>
   )
}