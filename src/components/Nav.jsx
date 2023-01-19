import styles from './Nav.module.css'
import styles2 from './flashesmios.module.css'
import SearchBar from "./SearchBar";



export default function Nav({onSearch}) {
    return (

<div className={styles.contenedor}>
<div className={styles2.contenedor} > ARGENTINA CAMPEON DO MUNDO </div>
 <nav><SearchBar  onSearch={onSearch}/></nav>     
</div>  
)}


