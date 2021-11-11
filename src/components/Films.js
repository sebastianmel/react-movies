import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import MoviesDel from './MoviesDel'


const Films = () => {
    const [data, setData] = useState('');
   

    useEffect(() => {
        axios
            .get('http://localhost:3000/movies')
            .then((res) => setData(res.data));


    }, []);

    console.log(data);
    return(
        <div className="films">
            <div className="films-list">


                {Object.keys(data).map((key) => {
                    return <div className="film"><p>{data[key].title}</p> <img src={data[key].poster} ></img> <br/>
                       <NavLink exact to={`movie/${data[key].id}`}>
                                        <button className="boutton">Plus...</button></NavLink><MoviesDel className="boutton" id={data[key].id} setData={setData}/></div>
                })}
               
                
            </div>
        </div>
    );
};

export default Films;
