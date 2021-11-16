import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import MoviesDel from './MoviesDel'
import { Button } from 'react-bootstrap';



const Films = () => {
    const [data, setData] = useState('');
    

    useEffect(() => {
        axios
            .get('http://localhost:3000/movies')
            .then((res) => setData(res.data.reverse()));

            
            
    }, []);

    function search (){
        const searchValue = document.querySelector(".filterinput").value;
        console.log(searchValue);

    }

    
   

    
    return (
        <div className="films">
            <form className="filterBar">

                <input className="filterinput" type="search"   ></input>
                &#160; &#160;
                <Button className="filterButton"  variant="outline-secondary" onClick={search}>Recherche</Button>
            </form><br></br>
            <div className="films-list">


                {Object.keys(data).map((key) => {
                    return <div className="film"><p>{data[key].title}</p> <img src={data[key].poster} ></img> <br />
                        <NavLink exact to={`movie/${data[key].id}`}><Button className="boutton">Plus...</Button></NavLink><MoviesDel className="boutton" id={data[key].id} setData={setData} /></div>
                })}


            </div>
        </div>
    );
};

export default Films;
