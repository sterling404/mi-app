
import styles from'./useInfo.module.css'
import ButonContac  from '@/components/butones/buton'
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import Imagen from '@/components/imagenes/Image';

export default function UserInfo(props){
    return (
        <>
        <div className={styles.UserInfo}>
            {/*"max-w-200 p-2  rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white"*/}
            
            <div className={styles.contprofil}>
                <div className={styles.profil} > 
                    <Imagen src={props.avatar} className={styles.imagen}  width={180} height={180} alt="" />
                </div>
            </div>
            <h3 className={styles.name}>{props.userName}</h3>
            <div className={styles.conspan}>
                 <p ></p>
                 <h4>{props.Estado}</h4> 
            </div>
            <p className={styles.funcion}>{props.funtion}</p>
            <p className={styles.descripcion}>{props.descripcion}</p>
            <div className={styles.contenbutones}>
                <ButonContac className={styles.buton} nombre = 'Contacto' /> 
                <ButonContac className={styles.buton} nombre = {<FaHeart fontSize={25} color='red' />} /> 
                <p>100K</p>
            </div>
        </div>
        </>
    )
}