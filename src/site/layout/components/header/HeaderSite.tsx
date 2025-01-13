import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2'; 
import { NavLink } from 'react-router-dom';
import style from './css/HeaderStyle.module.css';  // Importa el archivo CSS

export const HeaderSite = () => {
    return (
        <>
            <Grid container sx={{ height: "100vh", position: "fixed", left: 0, width: '120px' }}>
                {/* Panel izquierdo con texto rotado */}
                <Grid                   
                    sx={{
                        xs: 6
                        ,md: 8
                        ,backgroundColor: "white"
                        ,width: '100%'                    
                    }}
                >
                    <Box
                        sx={{
                            display: "flex"
                            ,alignItems: "center"
                            ,writingMode: "vertical-rl" 
                            ,transform: "rotate(180deg)"
                            ,gap: '30px'
                            ,height: '80%'
                            ,width: '100%'
                        }}
                    >
                        <NavLink to="/portafolio" className={({ isActive }) => isActive ? style['header-navlink-active'] : style['header-navlink'] }>Portafolio</NavLink>

                        <NavLink to="/podcast" className={({ isActive }) => isActive ? style['header-navlink-active'] : style['header-navlink'] }>Podcast</NavLink>  

                        <NavLink to="/research" className={({ isActive }) => isActive ? style['header-navlink-active'] : style['header-navlink'] }>Research</NavLink>

                        <NavLink to="/clientes" className={({ isActive }) => isActive ? style['header-navlink-active'] : style['header-navlink'] }> Clientes </NavLink>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}