import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";
import Logo from "./Logo";





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


                    <div className="off">

                        <h1>{data.title} <br></br> </h1>

                        <div className="image-container">
                            <div ><img alt="" id="cardImg" style={{ width: '70%' }} src={data.poster}></img></div>
                            <div>
                                

                                <p>infos : 
                                    
                                    {data.release_date}
                                    {data.categories.map((key)=>{
                                    return <p>{key}</p> ;
                                })}
                                </p>

                                    </div>
                            </div>

                           

                            <div className="description">
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