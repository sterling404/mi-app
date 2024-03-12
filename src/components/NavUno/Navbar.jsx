'use client'
import Link from "next/link";
import ButtonContact from "@/components/butones/buton"; // Asegúrate de que el nombre del archivo y la importación sean consistentes
import styles from './navuno.module.css';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { MdDesignServices } from "react-icons/md";
import { BiLogoBlogger } from "react-icons/bi";
import { useState, useEffect, useRef } from 'react';
import { Avatar } from "@nextui-org/react";

import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [shouldHide, setShouldHide] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navRef = useRef(); // Ref para el contenedor del menú
    const router = useRouter()

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShouldHide(true);
            } else {
                setShouldHide(false);
            }
            setLastScrollY(window.scrollY);
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY]);

    // Detectar clics fuera del menú
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false); // Cierra el menú si el clic fue fuera
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [navRef]);

    return (
        <>
            <nav ref={navRef} className={`${styles.Navbar} ${shouldHide ? styles.hide : ''}`}>
                <div className={styles.logo}>
                    <h1>Blogemp</h1>
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.botones}>
                    
                       { /*<ButtonContact className={styles.btniniciarsecion} nombre='log in' />
                        <ButtonContact className={styles.btncrearcuenta} nombre='Get Started' />*/}
                        <HiOutlineMenuAlt4 fontSize={30} className={styles.btnsubmenu} onClick={toggleNav} />
                    </div>
                    <div className={`${styles.opciones} ${isNavOpen ? styles.show : ''}`}>
                        <ul>
                            <li onClick={()=>{ router.push('/'), setIsNavOpen(false) }}>Inicio</li>
                            <li onClick={()=>{ router.push(`/${7}`), setIsNavOpen(false) }}>
                                Servicios
                            </li>
                            <div className={styles.span}></div>
                            <li><Link className={styles.enlace} href='/profil-comfig'>{<TfiWrite className={styles.icoenlace}/>}Editar perfil</Link></li>
                            <li><Link className={styles.enlace} href='/new-publication'>{<MdDesignServices className={styles.icoenlace}/>}Crear un nuevo servicio</Link></li>
                            <li><Link className={styles.enlace} href='/new-blog'>{<BiLogoBlogger className={styles.icoenlace}/> }Crear un nuevo Blog</Link></li>
                            <li><Link className={styles.enlace} href='/setting'>{<MdOutlineSettingsSuggest className={styles.icoenlace}/>}Comfiguracion</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Aquí el resto de su contenido */}
        </>
    );
}
