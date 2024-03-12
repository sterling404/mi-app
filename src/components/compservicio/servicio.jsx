import styles from './servicio.module.css'

export default function Servicio() {
  return (
    <>
      <div
        className={styles.div1}
        style={{
          backgroundImage: 'url("/prueba modelo.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.ConBtnAction}>
          <div className={styles.precio}>
            <p>Precio: </p>
            <p> 58.000$</p>
          </div>
          
          <button>Contactar</button>
        </div>
      </div>
    </>
  );
}
