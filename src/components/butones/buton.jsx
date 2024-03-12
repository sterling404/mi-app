"use client"
import styles  from './buton.module.css'

export default function ButonContac(props){
    return (
        <button className={`${props.className}`}  > {props.nombre} </button>
    )
}