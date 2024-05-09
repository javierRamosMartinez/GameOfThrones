import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CronologyCard from './CronologyCard'
import SimpleBar from 'simplebar-react'

export default function CronologyPage() {

    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const getOrdenedCharacters = async () => {
            const response = await axios.get("http://localhost:3000/characters");
            const charactersData = response.data;
            // Ordenar los personajes por edad
            charactersData.sort((a, b) => a.age - b.age);
            setCharacters(charactersData);
            console.log(response.data);
        }
        getOrdenedCharacters()
    }, [])

    return (
        <SimpleBar style={{ maxHeight: 678, top: 80 }}>
            <div>
                <CronologyCard characters={characters} />
            </div>
        </SimpleBar>
    )
}
