import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import AsyncSelect from 'react-select/async';
import Movies from './Movies';
import Navigation from "./Navigation";
import Logo from "./Logo";





// Fonction qui permet d'etre redirigé vers la page d'un événement ciblé

function BouttonEdit() {

    const eventSetting = useParams()
    const [data, setData] = useState(null);
    const id = eventSetting.id


    useEffect(() => {

        axios
            .get(
                'http://localhost:3000/movies/' + id
            )
            .then((res) => setData(res.data));

    }, []);
// ----------------------MODIFICATION-------------
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');


    const handleInputChange = value => {
        setValue(value);
    }

    const handleChange = value => {
        setSelectedValue(value);
    }

    // stock les donnÃ©es des films dans un format objet pour que axios les envoie a l api
    
    const [dataEdit, setDataEdit] = useState({
        title: "",
        release_date: "",
        categories: [],
        description: "",
        actors: [],
        similar_movies: [],
        // poster: 'https://ridzeal.com/wp-content/uploads/2021/08/summer-movies-2021-new-e1620919489437-1536x1167.jpg',
        poster: "",
        

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
        const value = e.target.value;

        if (data.categories.includes(value)) {
            setData(prevState => ({
                ...prevState,

                categories: dataEdit.categories.filter(e => e !== value)
            }));
        }
        else {
            setData(prevState => ({
                ...prevState,
                categories: [...prevState.categories, value]
            }));
        }

    }
 

    const EditMovie = () => {
        const eventSet = useParams()
        const id = eventSet.id

        axios.put('http://localhost:3000/movies/'+id, {
            title: selectedValue.title,
            release_date: dataEdit.release_date,
            description: dataEdit.description,
            categories: dataEdit.categories,
            // poster: 'https://images-na.ssl-images-amazon.com/images/I/71aH-U9+EfL.png',
            poster: dataEdit.poster,
            actors: dataEdit.actors,
            similar_movies: dataEdit.similar_movies,
        })

        console.log(dataEdit);
    }

    const search = async (inputValue) => {
        try {
            const response = await Movies.search(inputValue);
            return response.data.results;
        } catch (e) {
            console.log(e);
        }
    }


    return (

        <div className="boutton">
            <Logo />
            <Navigation />

            {data &&
                <div className="container">


                    <div className="off1">

                        

                        <div className="image-container">
                            <div > Infos du films :
                                <p>{data.title} </p>
                                <img alt="" id="cardImg" style={{ width: '10%' }} src={data.poster}></img></div>
                            <p>Sortie le : {data.release_date}<br></br> </p>
                            <p>Genre :{data.categories.map((key) => { return <p>{key}</p>; })}</p>
                            <p>{data.description.replace(/(<([^>]+)>)/gi, "")}</p>
                            {/* {data.actors.map((key) => { return <div className="actor"><img src={key.photo} ></img><br></br><p>{key.name + "/"} {key.character}</p> </div>; })} */}
                        </div>
                        
                       <div className="formulaire">
                        <form>
                <div className="">Formulaire de modification : <br></br>
            <input id="monNavigateur" name="title" value={data.title=selectedValue.title} onChange={ChangeAdd} ></input> 
                    
                <label for="exampleFormControlInput1">Nom du film :</label><br></br>
                
                    <AsyncSelect
                        cacheOptions
                        defaultOptions
                        value={selectedValue}
                        getOptionLabel={e => e.title}
                        getOptionValue={e => e.title}
                        loadOptions={search}
                        onInputChange={handleInputChange}
                        onChange={handleChange}
                    />


                    <hr></hr>
                    {/* <label for="exampleFormControlInput1">Nom du film</label>
                    <input id="monNavigateur" name="title" value={data.title||selectedValue.title} onChange={ChangeAdd} ></input> */}
                    
                   

                    <label for="exampleFormControlInput1">Image du fim(url) : </label>
                    <input type='text' class="form-control"  id="exampleFormControlInput1" placeholder="https//image.jpg" name="poster" value={dataEdit.poster="https://image.tmdb.org/t/p/w342"+selectedValue.poster_path} onChange={ChangeAdd}></input><br></br>


                </div>



                <div><br></br>
                    <label for="exampleFormControlInput1">Description :</label><br></br>
                    <textarea  rows="5" cols="33" type="text" class="form-control" id="exampleFormControlInput1" placeholder="description du film" name="description" value={dataEdit.description=selectedValue.overview} onChange={ChangeAdd}></textarea>
                </div>

                <div>
                    <label for="start">Date de sortie :</label>

                    <input type="date" id="start" name="release_date" value={dataEdit.release_date=selectedValue.release_date} min="2018-01-01" max="2022-12-31" onChange={ChangeAdd} ></input>
                </div>

                <div class="form-group">



                    <label for="exampleFormControlSelect2">Categories du film :</label> <br></br>
                    <input type="checkbox" id="Action" name="categories"
                        value={"Action"} onChange={Changecategorie}></input>
                    <label for="Action">Action</label>

                    <input type="checkbox" id="Aventure" name="categories"
                        value={"Aventure"} onChange={Changecategorie}></input>
                    <label for="Aventure">Aventure</label>

                    <input type="checkbox" id="Science-Fiction" name="categories"
                        value={"Science-Fiction"} onChange={Changecategorie}></input>
                    <label for="Science-Fiction">Science-Fiction</label>

                    <br></br>

                    <input type="checkbox" id="Comédie" name="categories"
                        value={"Comédie"} onChange={Changecategorie}></input>
                    <label for="Comédie">Comédie</label>

                    <input type="checkbox" id="Drame" name="categories"
                        value={"Drame"} onChange={Changecategorie}></input>
                    <label for="Drame">Drame</label>
                    
                    <input type="checkbox" id="Horreur" name="categories"
                        value={"Horreur"} onChange={Changecategorie}></input>
                    <label for="Horreur">Horreur</label>

                    <br></br>

                    <input type="checkbox" id="Policier" name="categories"
                        value={"Policier"} onChange={Changecategorie}></input>
                    <label for="Policier">Policier</label>





                </div>




                <button type="button" class="btn btn-outline-success" onClick={EditMovie} >Valider</button>



            </form>
             </div>              


                    </div>

                </div>

                
            }  
        </div>
    )   
}

export default BouttonEdit;