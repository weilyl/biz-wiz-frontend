import Home from "./Home";
import axios from 'axios';
import SearchBusinesses from "./SearchBusinesses";
import {useState, useEffect} from 'react';

export default function Results() {
    const [input, setInput] = useState('');
    const [newSearchResults, setNewSearchResults] = useState([]);

    // console.log("num: ", newSearchResults.length)

    const handleSearch = async () => {
        try {
            return await axios
            .get(`https://biz-wiz.herokuapp.com/business/find/name/${input}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                  }
            })
            .then((res) => {
                console.log("data: ", res.data);
                setNewSearchResults(res.data);
                console.log(1, newSearchResults);
                // console.log(2, resultsChanged)
                // setResultsChanged(!resultsChanged);
                // console.log(3, resultsChanged)
                // history.push('/search-businesses');
                // return searchResults
            })
        } catch (err) {
            console.log("err msg: ", err.message)
        }
        // setResultsChanged(false);
    }

    useEffect(() => {
        handleSearch(input);

        if (newSearchResults !== undefined || !newSearchResults || newSearchResults.length === 0) {
            return <Home setNewSearchResults={setNewSearchResults} setInput={setInput} />
        } else {
            return <SearchBusinesses newSearchResults={newSearchResults} />
        }

    }, [newSearchResults])


    return (
        <div>
            {!newSearchResults ? <SearchBusinesses newSearchResults={newSearchResults} /> : <Home setNewSearchResults={setNewSearchResults} setInput={setInput} />}
        </div>
    )


}