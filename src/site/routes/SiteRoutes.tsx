import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LayoutSitePage } from "../layout/page/LayoutSitePage";
import { Inicio } from "../pages/main/page/Inicio";
import { Page404 } from "../shared/pages/Page404";

export const SiteRoutes = () => {
    return (
        <Routes>
            {/* SITE */}
            <Route
                path="/"
                element={
                    <LayoutSitePage>
                        {/* Este será el punto donde se renderizan los hijos */}
                        <Outlet />
                    </LayoutSitePage> 
                }
            >
                {/* Subruta de inicio */}
                <Route index element={<Navigate to="portafolio" />} />
                <Route path="portafolio" element={<Inicio />} />
            </Route>    

            <Route path="*" element={ <Page404 /> } />
        </Routes>
    )
}
