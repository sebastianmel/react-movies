import { useState } from 'react';
import axios from "axios";

const Add = () => {
    // stock les données des recettes dans un format objet pour que axios les envoie a l api
    const [data, setData] = useState({
        title: "",
        release_date: "",
        categories: [],
        description: "",
        actors: [],
        similar_movies: [],
        // poster: 'https://ridzeal.com/wp-content/uploads/2021/08/summer-movies-2021-new-e1620919489437-1536x1167.jpg',
        poster: ""

    });
    // ChangeAdd met a jour les valeurs des input
    const ChangeAdd = (e) => {
        // console.log(e.target.value);

        const name = e.target.name;
        const value = e.target.value;

        setData(prevState => ({

            ...prevState,
            [name]: value




        }));




    }

    const Changecategorie = (e) => {
        // console.log(e.target.value);


        const value = e.target.value;


        if (data.categories.includes(value)) {
            setData(prevState => ({
                ...prevState,

                categories: data.categories.filter(e => e !== value)
            }));
        }
        else {
            setData(prevState => ({
                ...prevState,
                categories: [...prevState.categories, value]
            }));
        }






    }
 

    console.log(data);

    const AddMovie = () => {

        axios.post('http://localhost:3000/movies', {
            title: data.title,
            release_date: data.release_date,
            description: data.description,
            categories: data.categories,
            // poster: 'https://images-na.ssl-images-amazon.com/images/I/71aH-U9+EfL.png',
            poster: data.poster,
            actors: data.actors,
            similar_movies: data.similar_movies


        })



        console.log(data);


    }


    
        
    
    
   




    return (
        <div className="add">



            <br></br>


            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Nom du film</label>
                    <input list="navigateurs" id="monNavigateur" name="title" value={data.title} onChange={ChangeAdd} ></input>
                    <datalist id="navigateurs">
                        <option value="Chrome"></option>
                        <option value="Firefox"></option>
                        <option value="Internet Explorer"></option>
                        <option value="Opera"></option>
                        <option value="Safari"></option>
                        <option value="Microsoft Edge"></option>
                    </datalist>

                    {/* <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nom du film" name="title" value={data.title} onChange={ChangeAdd}></input> */}
                    <br></br>

                    <label for="exampleFormControlInput1">Image du fim(url)</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="https//image.jpg" name="poster" value={data.poster} onChange={ChangeAdd}></input><br></br>


                </div>

               

                <div><br></br>
                    <label for="exampleFormControlInput1">Description</label>
                    <textarea type="text" class="form-control" id="exampleFormControlInput1" placeholder="description du film" name="description" value={data.description} onChange={ChangeAdd}></textarea>
                </div>

                <div>
                    <label for="start">Date de sortie :</label>

                    <input type="date" id="start" name="release_date" value={data.release_date} min="2018-01-01" max="2022-12-31" onChange={ChangeAdd} ></input>
                </div>

                <div class="form-group">
                    


                    <label for="exampleFormControlSelect2">Categories du films</label> <br></br>
                    <input type="checkbox" id="Action" name="categories"
                        value={"Action"} onChange={Changecategorie}></input>
                    <label for="Action">Action</label>

                    <input type="checkbox" id="Aventure" name="categories"
                        value={"Aventure"} onChange={Changecategorie}></input>
                    <label for="Aventure">Aventure</label>

                    <input type="checkbox" id="Science-Fiction" name="categories"
                        value={"Science-Fiction"} onChange={Changecategorie}></input>
                    <label for="Science-Fiction">Science-Fiction</label>




                </div>




                <button type="button" class="btn btn-outline-success" onClick={AddMovie} >Ajouter</button>



            </form>


        </div>


    );
}

export default Add;