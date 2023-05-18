import React, {useState} from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Form = (props) => {
    const [localId, setLocalId] = useState('')
    const [localType, setLocalType] = useState('people')

    const navigate = useNavigate()

    const searchApi = (e) => {
        e.preventDefault()
        navigate(`/${localType}/${localId}`)
        
    }
    return (
        <div>
            <form onSubmit={ searchApi }>
                <div className="row justify-content-center my-4 align-items-center">
                    <div className="col-auto">
                        <label className="form-label" htmlFor='searchOptions'>
                            Search for:
                        </label>
                    </div>
                    <div className="col-auto me-4">
                        <select id="searchOptions" className="form-select" onChange={(e) => { setLocalType(e.target.value) }} value={localType}>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="starships">Starships</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="id">Id:</label>
                    </div>
                    <div className="col-1 me-4">
                        <input type="number" className="form-control" onChange={(e) => { setLocalId(e.target.value) }} name="id" id="id" value={ localId }/>
                    </div>
                    <div className="col-auto">
                        <input className="btn btn-primary" type="submit" value="Search" />
                    </div>
                </div>
            </form>
            <Outlet />
        </div>
    )
}

export default Form