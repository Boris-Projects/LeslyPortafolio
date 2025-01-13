import { Route, Routes } from "react-router-dom";
import { SiteRoutes } from "../site/routes/SiteRoutes";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* lOGIN Y REGISTRO */}
             {/* Subrutas que se renderizan dentro de LayoutPage */}
            <Route path="/*" element={ <SiteRoutes /> }></Route>
        </Routes>
    )
}
