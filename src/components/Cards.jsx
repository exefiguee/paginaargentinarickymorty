import Card from './Card';
import styles from './Card.module.css'




export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={styles.contenedor}>

{characters.map(marimar =>

   {
    
    return(  <Card  
      key= {marimar.id}
      id={marimar.id} 
      name={marimar.name}
      species={marimar.species}
      gender={marimar.gender}
      image={marimar.image}
      onClose={onClose}
      /> )
      
   }
   
   )
   
   }



   </div>;
}
