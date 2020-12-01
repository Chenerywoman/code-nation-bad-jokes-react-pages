import {useState, useEffect} from 'react';
import axios from 'axios';
import './Categories.css'

const Categories = () => {
    
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("");
    const [joke, setJoke] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {

        try {
            const res = await axios.get("https://api.chucknorris.io/jokes/categories")
            setCategories(res.data)
        } catch(err){
            setErrorMessage(err.response.data.error)
        }
    }

    const fetchJokes = async (categoryName) => {

        try {
            const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${categoryName}`)
            setJoke(res.data.value)

        } catch (error){
            setJoke(error.response.data.message)
        }

    }

    const handleChange = (event) => {

        setCategory(event.target.value)
        console.log(category)
    }

    const handleSubmit= (event) => {
        fetchJokes(category);
        setCategory("")
        event.preventDefault();
    }
    
    return (
        <>
        <h2>
            Input a category to get a joke
        </h2>
        <p>The categories are.....</p>
        <div className="container categories-ul">
        <ul className="categories-ul">
            {categories.length > 0 ? categories.map((category, ind) => {
                return <li>{category}</li>
            }) : errorMessage}
        </ul>
        </div>
        <input value={category} onChange={handleChange} type="text"/>
        <button onClick={handleSubmit} value="Submit" type="submit">Submit</button>
        <div>Joke: {joke}</div> 
        </>
    )
}

export default Categories
