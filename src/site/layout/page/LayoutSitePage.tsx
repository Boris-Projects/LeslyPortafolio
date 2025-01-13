
import { LayoutPageProps } from "../../interfaces/LayoutPageProps";
import { Footer } from "../components/footer/Footer";
import { HeaderSite } from "../components/header/HeaderSite";
import style from '../css/LayoutStyle.module.css'

export const LayoutSitePage = ({ children }: LayoutPageProps) => {
    return (
        <div>
            <HeaderSite />  

            <main className={style.sectMain}>{children}</main>

            <Footer />
        </div>
    )
}
