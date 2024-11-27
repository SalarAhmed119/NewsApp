import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Newsapp() {
    //1. state/hook variable
    const [search, setSearch] = useState('pakistan');
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_KEY = "8415bb95e2b443829ea87a87855195f6";

    //2. method/function to fetch data
    const getData = async() => {
        setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const data = await response.json();
        setNewsData(data.articles);
        setLoading(false);
    };

    // Trigger the API call when `search` changes
    useEffect(() => {
        getData();
    }, [search]); // Runs the effect when `search` state changes

    //3. Handle input changes for search
    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    // Handle category button clicks
    const setData = (e) => {
        setSearch(e.target.innerHTML); // Update the search state
    };

    //3. Return statement/jsx
    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a onClick={setData}>All News</a>
                    <a onClick={setData}>Trending</a>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div className='categoryBtn'>
                <button onClick={setData}>World</button>
                <button onClick={setData}>Business</button>
                <button onClick={setData}>Sports</button>
                <button onClick={setData}>Science/Tech</button>
                <button onClick={setData}>Entertainment</button>
                <button onClick={setData}>Health</button>
            </div>
            <div>
                {loading ? <p>Loading...</p> : <Card data={newsData} />}
            </div>
        </div>
    );
}
