import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ObiWan from './obi-wan.gif'

const People = (props) => {
    const  {id} = useParams()
    const [person, setPerson] = useState(null)
    const [planet, setPlanet] = useState(null)
    const [planetId, setPlanetId] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPerson(response.data)
                const planetUrl = response.data.homeworld.split('/')
                setPlanetId(planetUrl[5])
                axios.get(response.data.homeworld)
                    .then(res => setPlanet(res.data))
                    .catch(err => setPlanet(null))
                    setError(false)
                    setLoaded(true)
                })
                .catch(err => {
                    console.log(err)
                    setPerson(null)
                    setPlanet(null)
                    setError(true)
                })
    }, [id])

        return (
            <>
                {!loaded && !error?
                    <p>Loading...</p>
                    :
                    <div className="row justify-content-center">
                        <div className="col-auto" id="displayResults">
                            {person ? <h1>{person.name}</h1> : <img src={ ObiWan } alt="Obi-Wan Kenobi"/>}
                            {person ? <p><span className="label">Height: </span>{person.height} cm</p> : ''}
                            {person ? <p><span className="label">Mass: </span>{person.mass} kg</p> : ''}
                            {person ? <p><span className="label">Hair Color: </span>{person.hair_color}</p> : ''}
                            {person ? <p><span className="label">Eye Color: </span>{person.eye_color}</p> : ''}
                            {person ? <p><span className="label">Skin Color: </span>{person.skin_color}</p> : ''}
                            {planet ? <p><span className="label">Home World: </span><Link to={ `/planets/${planetId}` }>{planet.name}</Link></p> : ''}
            
            
                        </div>
                    </div>
                }
            </>


        )
}

export default People