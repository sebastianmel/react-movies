import axios from "axios";

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
        <button type="button"  onClick={delMovie}>
            Supprimer
        </button>
      );
}
 
export default Delete ;