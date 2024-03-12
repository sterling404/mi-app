'use client'
import Link from "next/link"
import styles  from "./SubNavbar.module.css"
import { TbBrandBlogger } from "react-icons/tb";
import { PiUsersDuotone } from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function SubNavBar({user}){
    const router = useRouter()
    return (
        <nav className={styles.nav}>
            
            <ul>
                <li onClick={()=>{ router.push(`/${user}`)}}>    
                    <CiGrid42 className={styles.iconos} />
                    Home 
                </li>
                <li onClick={()=>{ router.push(`/${user}/blog`)}}>
                    <TbBrandBlogger className={styles.iconos} fontSize={30} /> 
                    Blog    
                </li>
                <li onClick={()=>{ router.push(`/${user}/about`)}}>    
                    <PiUsersDuotone className={styles.iconos} fontSize={30}/>  
                    About
                </li>
            </ul>
        </nav>
    )
}