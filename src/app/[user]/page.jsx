
import styles from "./page.module.css"
import Servicio from '@/components/compservicio/servicio'



export default function Users(){
    return (
        <>
        <div className={styles.pageindex}>
            <Servicio />
            <Servicio />
            <Servicio />
            <Servicio />
            <Servicio />
        </div>
        
        
        </>
    )
}