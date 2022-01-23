import { useEffect, useState } from 'react';
import Axios from "axios";

import '../styling/history.css'

function HistoryDb() {
    let [gamelist, setGamelist] = useState([]);


    const getGames = () => {
        Axios.get("http://localhost:3001/addgame").then((response) => {
            console.log(response)
            setGamelist(response.data);
        });
    };

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div>
            {gamelist.map((winner) => {
                return winner.winner;
            })}
        </div>
    )
}

export default HistoryDb;