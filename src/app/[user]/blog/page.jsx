import styles from './page.module.css'
import EntradaBlog from '@/components/entradablog/entradablog'
import { Suspense } from 'react'


async function loadPost(id){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

export default async function Bloguse(){
    const posts = await loadPost();

    return (
        <div className={styles.contanblog}>
            {posts.map((post)=> (
                <div key={post.id}> 
                    <EntradaBlog titulo={post.title} descipcion={post.body} idblog={`blog/${post.id}`}/>
                </div>
            ))} 
        </div>
    )
}