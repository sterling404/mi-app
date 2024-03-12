


 
export default function Imagen(props) {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      className={props.className}
      alt={props.alt}
    />
  )
}