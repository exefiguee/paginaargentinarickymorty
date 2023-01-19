
import styles from './Card.module.css'
import styles2 from './parah2.module.css'

export default function Card(props) {
   return (
     

   
      <div >
      <h2 className={styles2.contenedor}>{props.name}</h2>
       <img  src={props.image} alt=".hub" />
     <h2 className={styles2.contenedor}>{props.species}</h2>
         <h2 className={styles2.contenedor}>{props.gender}</h2> 
         <button onClick={()=>props.onClose(props.id)}>cerrar</button>
      </div>


   );
}
