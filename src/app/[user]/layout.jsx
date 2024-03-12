import Link from 'next/link';
import Imagen from '@/components/imagenes/Image'
import SubNavBar from '@/components/NavDos/SubNavbar'
import Styles from './layout.module.css'
import UserInfo  from '@/components/InfoUse/useInfo'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

async function getuser(user){
    const res = await fetch(`https://api.slingacademy.com/v1/sample-data/users/${user}`)
    const data = await res.json()
    return data.user
}


export default async function LayoutUse ({children,params}){
    const user=await getuser(params.user)
    return(
        <>
        <main className={Styles.main}>
            <div className={Styles.container}>
                <div className={Styles.conten1}>
                    <UserInfo avatar={user.profile_picture} userName={`${user. first_name}  ${user.last_name}`} Estado={user.city} funtion={user.job} descripcion='Diseñamos páginas web personalizadas, con la mejor experiencia de usuario, optimizadas y adaptable a cualquier dispositivo,' />
                </div>
                <div className={Styles.conten3}>
                    <SubNavBar user={user.id}/>
                </div>
                <div className={Styles.conten4}>
                    
                    <Link href=""><Imagen src='/x.png'  className={Styles.redessociales} width={40} height={40} alt="" /></Link>
                    <Link href=""> <Imagen src='/linkeding.png'  className={Styles.redessociales} width={40} height={40} alt="" /></Link>
                    <Link href=""><Imagen src='/github.png'  className={Styles.redessociales} width={40} height={40} alt="" /> </Link>
                    <Link href=""> <Imagen src='/instagram.png'  className={Styles.redessociales} width={40} height={40} alt="" /></Link>
                    
                </div>

            </div>
            {children}
            
        </main>
        
        </>
    )
}