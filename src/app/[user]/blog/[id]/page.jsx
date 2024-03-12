import styles  from "@/app/[user]/blog/[id]/entradaBlog.module.css";
import { FaSearch } from "react-icons/fa";
import { Suspense } from "react";
import { log } from "console";

async function loadPost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}


async function Pablog({params}){
    
    const posts = await loadPost(params.id);
    

    return(
        <div className={styles.blog}>
            <div className={styles.contenido}>
                <div className={styles.linea}><div></div></div>
                <article className={styles.article}>
                    
                    <h1> {posts.title}</h1>
                    <p>{posts.body}</p>    
                </article>
                <div className={styles.comentario}>
                    <div className={styles.usuario}>
                        <div className={styles.perfil}></div> 
                        <p>louven</p> 
                    </div>
                    <textarea className={styles.texto} placeholder="Enviar un comentario" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            
            <div className={styles.baralateral}>
                <div className={styles.conbuscador} >
                    <input  className={styles.buscadorblog} type="text" placeholder="Buscar"/>
                    <FaSearch />
                </div>
                <h6>Posts</h6>
                <h5>Relacionado</h5>
                
            </div>
        </div>
        
    )
}
export default Pablog;