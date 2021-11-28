import axios from "axios";
import { Button } from 'react-bootstrap';


// function de suppression de films

const Clear = ({data,setData}) => {
    const clearMovie = () => {
        
        axios
            .delete(
                'http://localhost:3000/movies/',

                alert('Tous les films sont supprimés avec succès'),
                alert('Tous les films sont supprimés avec succès')
            )
            
            
    }
    


    return (
        <Button type="button" className="filterButton" variant="outline-secondary"  onClick={clearMovie}>
            Nettoyer !
        </Button>
      );
}
 
export default Clear ;