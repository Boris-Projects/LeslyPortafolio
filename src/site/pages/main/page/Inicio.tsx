import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';


import style from '../css/InicioStyle.module.css';  // Importa el archivo CSS
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import psIcon from '../img/ps-icon.png';
import aiIcon from '../img/ai-icon.png';
import idIcon from '../img/id-icon.png';
import lrIcon from '../img/lr-icon.png';
import wIcon from '../img/ws-icon.png';
import fIcon from '../img/f-icon.png';
import lesly from '../img/lesly.png';

import imgCliente1 from '../img/cliente1.png';
import imgCliente2 from '../img/cliente2.png';

export const Inicio = () => {
    return (
        <>
            <section className={style.sectInicio}>
                <Grid container>
                    <Grid size={{ xs: 6, md: 5 }} sx={{ padding: '50px 15px'}} className={style.boxLeft}>
                        <Box className={style.boxCard}>
                            <h5 className={style.aboutMe}>Acerca de mi</h5>
                            <Box className={style.boxHead}>
                                <h5>Diseñadora <br /> Gráfica UX/UI</h5>
                            </Box>
                            <Box className={style.boxBody}>
                                <Box
                                    className={style.boxPhoto}
                                    sx={{
                                        maxWidth: '400px'
                                        ,margin: '0 auto'
                                        ,marginLeft: 'auto'
                                        ,marginRight: '50px'
                                        ,padding: '10px'
                                    }}
                                >
                                    <img src={ lesly } alt="" width="100%" />
                                </Box>
                            </Box>
                            <Box className={style.boxFoot}>
                                <h1><b>Lesly</b> <br /> <b>De La Cruz</b> <br /> Cardenas</h1>
                                <h3>lessdlcc@gmail.com <MailOutlineIcon /></h3>
                            </Box>
                            
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 6, md: 7 }} sx={{ padding: '50px 15px'}} className={style.boxRight}>
                        
                        <Box className={style.boxHead}>
                            <h2>Portafolio</h2>
                        </Box>
                        <Grid container spacing={3} className={style.boxBody} >
                            <Grid size={8} className={style.boxWeb}>
                                <h4>Web</h4>
                            </Grid>
                            <Grid size={4} className={style.boxSkills}>
                                <ul>
                                    <li><img src={ psIcon } alt="" /> Adobe <br /> Photoshop</li>
                                    <li><img src={ aiIcon } alt="" /> Adobe <br /> Illustrator</li>
                                    <li><img src={ idIcon } alt="" /> Adobe <br /> InDesign</li>
                                    <li><img src={ lrIcon } alt="" /> Adobe <br /> Ligthtroom</li>
                                    <li><img src={ wIcon } alt="" /> Whimsical</li>
                                    <li><img src={ fIcon } alt="" /> Figma</li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid container className={style.boxFoot}>
                            <Grid size={4} className={style.boxClientes}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]} // Añade los módulos que necesites
                                    loop={true} // Activa el bucle infinito
                                    autoplay={{
                                        delay: 3000, // Cambia automáticamente cada 3 segundos
                                        disableOnInteraction: false, // No se detiene al interactuar
                                    }}
                                    navigation // Habilita flechas de navegación
                                    pagination={{ clickable: true }} // Habilita paginación clickeable
                                    spaceBetween={30} // Espaciado entre slides
                                    slidesPerView={1} // Muestra una slide a la vez
                                >
                                    {/* Slides */}
                                    <SwiperSlide>
                                        <img src={ imgCliente1 } alt="Slide 1" width="100%" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={ imgCliente2 } alt="Slide 2" width="100%" />
                                    </SwiperSlide>
                                </Swiper>
                            </Grid>
                            <Grid size={4} className={style.boxProyectos}>

                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </section>
        </>
    )
}
