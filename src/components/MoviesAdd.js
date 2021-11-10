import { useState } from 'react';
import axios from "axios";


const Add = () => {
    // stock les données des recettes dans un format objet pour que axios les envoie a l api
    const [data, setData] = useState({
        title: "",
        release_date: "",
        categories: [],
        description: "",
        actors:[],
        similar_movies:[],
        poster: 'https://ridzeal.com/wp-content/uploads/2021/08/summer-movies-2021-new-e1620919489437-1536x1167.jpg',

    });
    // ChangeAdd met a jour les valeurs des input
    const ChangeAdd = (e) => {
        console.log(e.target.value);

        const name = e.target.name;
        const value = e.target.value;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // console.log(data);


    }



    const AddMovie = () => {

        axios.post('http://localhost:3000/movies', {
            title: data.title,
            release_date: data.release_date,
            description: data.description,
            categories: [data.categories],
            poster: 'https://images-na.ssl-images-amazon.com/images/I/71aH-U9+EfL.png',
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
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nom du film" name="title" value={data.title} onChange={ChangeAdd}></input>
                <label for="exampleFormControlInput1">Description</label>
                <textarea type="text" class="form-control" id="exampleFormControlInput1" placeholder="description du film" name="description" value={data.description} onChange={ChangeAdd}></textarea>

            </div>

            <div>
                <label for="start">Date de sortie :</label>

                <input type="date" id="start" name="release_date" value={data.release_date} min="2018-01-01" max="2022-12-31" onChange={ChangeAdd} ></input>
            </div>

            <div class="form-group">
                <label for="exampleFormControlSelect2">Categories du films</label>
                <select class="form-control form-control-sm" onChange={ChangeAdd} name="categories" value={data.categories}>
                    <option selected ></option>
                    <option selected value="Action">Action</option>
                    <option>Aventure</option>
                    <option>Science-Fiction</option>
                </select>



            </div>




            <button type="button" class="btn btn-outline-success" onClick={AddMovie} >Ajouter</button>
            <input class="btn btn-success" type="reset" value="Reset"></input>


        </form>


    </div>


);
}

export default Add;