import {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {

    const [joke, setJoke] = useState("")
    
    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const res = await axios.get("https://api.chucknorris.io/jokes/random");
        console.log(res.data)

        setJoke(res.data.value);

    }

    return (
        <div>
            <h1>Random Joke</h1>
            <p>{joke}</p>
        </div>
    )
}

export default Home
