
import styles from './entradablog.module.css'
import { IoEnter } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa6";
import Link from 'next/link';

export default function EntradaBlog( props ){
    return (
        <article className={styles.entrada} >
            <div className={styles.conTarjeta}>
                <div className={styles.conten}>
                    <div  
                        className={styles.entrar}
                        style={{
                            backgroundImage: 'url("/prueba modelo.png")',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}>
                        <Link href={props.idblog}> <IoEnter className= {styles.btnentrar} /> </Link> 
                    </div>
                    <div className={styles.resumenCon}>
                        <div className= {styles.resumen}>
                            <h2>{props.titulo}</h2>
                            <p>{props.descipcion}</p>
                        </div>
                        <div className= {styles.reaciones}>
                            <FaHeart className={styles.btnreacion}  color='red' />
                            <FaCommentDots className={styles.btnreacion}  />
                            <p>15/nov/2023</p>
                        </div> 
                    </div>
                </div>
            </div>
             <div className={styles.datareaccion}>
                100 megusta 50 comentario {props.fechadecreacion}
             </div>
            
        </article>
    )
}