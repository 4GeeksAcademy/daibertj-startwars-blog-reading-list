import React, {useContext, useEffect, useState} from "react"
import { useParams } from "react-router"
import { Context } from "../../store/appContext"

const Characters= ()=> {
    const { store, actions } = useContext(Context)
    const {id} = useParams()
    const [characterDetail, setCharacterDetail]= useState({})

    useEffect(() => {
        const character = store.people.find(character=> character.uid == id)
        setCharacterDetail(character)
        }, [store.character])
    return (
        <div className="container">
            <div className="row d-flex justify-content-center m-5">
                <img 
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
                    className="img-description col-5"                
                    alt={characterDetail.properties?.name}
                />
                <div className="description col-4 text-white">
                    <h1>{characterDetail.properties?.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum doloremque nobis, molestiae ipsa natus illo nulla quae nisi magni fuga odio error totam eligendi quas amet excepturi ratione blanditiis!</p>
                    <p className="fw-bolder">Birth Year</p>
                    <p>{characterDetail.properties?.birth_year}</p>
                    <p className="fw-bolder">Gender</p>
                    <p>{characterDetail.properties?.gender}</p>
                    <p className="fw-bolder">Height</p>
                    <p>{characterDetail.properties?.height}</p>
                    <p className="fw-bolder">Skin Color</p>
                    <p>{characterDetail.properties?.skin_color}</p>
                    <p className="fw-bolder">Eye Color</p>
                    <p>{characterDetail.properties?.eye_color}</p>
                </div>                
            </div>              
        </div>
    )
}

export default Characters