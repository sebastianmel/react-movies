import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";
import Logo from "./Logo";
import { NavLink } from 'react-router-dom';

import { Button } from 'react-bootstrap';






// Fonction qui permet d'etre redirigé vers la page d'un événement ciblé

function Boutton() {

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

    return (

        <div className="boutton">
            <Logo/>
            <Navigation />
           

            {data &&
                <div className="container">

                <NavLink exact to={`/edit/${data.id}`}><Button className="boutton">Modifier</Button></NavLink>
                    <div className="off">

                        <h1>{data.title} <br></br> </h1>

                        <div className="image-container">
                            <div ><img alt="" id="cardImg" style={{ width: '30%' }} src={data.poster}></img></div>
                            <div>
                                

                                <p>Sortie le : <br></br>
                                    
                                    {data.release_date}<br></br>
                                    
                                    
                                </p>
                                <p>Genre : 
                                {data.categories.map((key)=>{
                                    return <p>{key}</p> ;
                                })}
                                </p>

                                    </div>
                            </div>

                           

                            <div className="description"><br></br>
                                <p>{data.description.replace(/(<([^>]+)>)/gi, "")}</p>
                                
                                <div className="actors">
                                {data.actors.map((key)=>{
                                    return <div className="actor"><img src={key.photo} ></img><br></br><p>{key.name+"/"} {key.character}</p> </div>;
                                })}
                                
                                </div>
                                
                                
                            </div>
                            <h2>Films similaires :</h2>
                            <div className="otherMovies">
                            {data.similar_movies.map((key)=>{
                                return <div> <br></br><img src={key.poster}></img><h1>{key.title}</h1><p>{key.release_date}</p></div>;
                                })}

                            </div>

                        </div>

                    </div>
            }
                </div>

    )
}

            export default Boutton;