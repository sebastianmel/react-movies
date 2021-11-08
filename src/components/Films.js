import { useEffect, useState } from 'react';
import axios from 'axios';


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
                      <p>{'Sortie le : '+ data[key].release_date}</p> <button type="button" className="boutton">Plus...</button> <br/></div>
                })}
               
                
            </div>
        </div>
    );
};

export default Films;
