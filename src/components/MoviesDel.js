import axios from "axios";
import { Button } from 'react-bootstrap';


// function de suppression de films

const Delete = ({id,setData}) => {
    const delMovie = () => {
        
        axios
            .delete(
                'http://localhost:3000/movies/' + id,

                alert('Le film a été supprimé avec succès')
            )
            .then(() => {
                axios
                    .get(
                        'http://localhost:3000/movies'

                    )
                    .then(movie=>{
                        setData(
                            movie.data
                        )
                    })
            });
            
    }
    


    return (
        <Button type="button" variant="outline-secondary"  onClick={delMovie}>
            Supprimer
        </Button>
      );
}
 
export default Delete ;