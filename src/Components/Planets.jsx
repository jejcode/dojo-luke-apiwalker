import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DeathStar from './death-star-alderaan.gif'

const Planets = (props) => {
    const {id} = useParams()

    const [planet, setPlanet] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)})
            .catch(error => {
                console.log(error)
                setPlanet(null)
            })
    }, [id])

    return (
        <div className="row justify-content-center">
            <div className="col-auto" id="displayResults">
                {planet ? <h1>{planet.name}</h1> : <h1>Planet not found.</h1>}
                {planet ? <p><span className="label">Climate: </span>{planet.climate}</p> : <img src={ DeathStar } alt="Alderaan exploding"/>}
                {planet ? <p><span className="label">Terrain: </span>{planet.terrain}</p> : ''}
                {planet ? <p><span className="label">Surface Water: </span>{planet.surface_water}%</p> : ''}
                {planet ? <p><span className="label">Population: </span>{planet.population}</p> : ''}
            </div>
        </div>
    )
}

export default Planets