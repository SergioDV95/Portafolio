import { Outlet } from "react-router-dom";

export default function Layout() {
   return (
      <>
         <Outlet />
         <img className="rotate-[-25.99deg] absolute -top-[50%] -left-[50%]" src={"./src/assets/png/Recurso_17.png"} alt="recurso 17" width="1182px" height="676px" />
      </>
   )
}