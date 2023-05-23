import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'

const Starships = (props) => {
    const  {id} = useParams()
    const [starship, setStarship] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)



    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response => {
                setStarship(response.data)
                setLoaded(true)
                setError(false)
                console.log('success!')
            })
            .catch(err => {
                console.log(err)
                setStarship(null)
                setError(true)
            })
        }, [id])
    return (
        <>
            {!loaded && !error ?
                <p >Loading...</p>
                :
                <div className="row justify-content-center">
                    <div className="col-auto" id="displayResults">
                        {starship ? <h1>{starship.name}</h1> : <h1>No ship found.</h1>}
                        {starship ? <p><span className="label">Model: </span>{starship.model}</p> : ''}
                        {starship ? <p><span className="label">Manufacturer: </span>{starship.manufacturer}</p> : ''}
                        {starship ? <p><span className="label">Cost: </span>{starship.cost_in_credits} credits</p> : ''}
                        {starship ? <p><span className="label">Starship class: </span>{starship.starship_class}</p> : ''}
                    </div>
                </div>
            }
        </>
    )
}

export default Starships