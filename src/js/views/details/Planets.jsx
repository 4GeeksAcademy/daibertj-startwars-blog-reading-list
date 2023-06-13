import React, {useContext, useEffect, useState} from "react"
import { useParams } from "react-router"
import { Context } from "../../store/appContext"
import rigoImageUrl from "../../../img/Tatooine_TPM.webp"

const Planets= ()=> {
    const { store, actions } = useContext(Context)
    const {id} = useParams()
    const [planetDetail, setPlanetDetail] = useState({})

    useEffect(() => {
        const planet = store.planets.find(planet => planet.uid == id)
        setPlanetDetail(planet)
    },[store.planets])
    return(
        <div className="container">
            <div className="row d-flex justify-content-center m-5">
                <img 
                    src={
                        id !=1
                        ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` 
                        : rigoImageUrl}
                        className="img-description col-8" 
                        alt={planetDetail.properties?.name}
                />
                <div className="description col-4 text-white">
                    <h1>{planetDetail.properties?.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum doloremque nobis, molestiae ipsa natus illo nulla quae nisi magni fuga odio error totam eligendi quas amet excepturi ratione blanditiis!</p>
                    <p className="fw-bolder">Population</p>
                    <p>{planetDetail.properties?.population}</p>
                    <p className="fw-bolder">Terrain</p>
                    <p>{planetDetail.properties?.terrain}</p>
                    <p className="fw-bolder">Diameter</p>
                    <p>{planetDetail.properties?.diameter}</p>
                    <p className="fw-bolder">Orbital Period</p>
                    <p>{planetDetail.properties?.orbital_period}</p>
                    <p className="fw-bolder">Climate</p>
                    <p>{planetDetail.properties?.climate}</p>
                </div>                
            </div>              
        </div>
    )
    
}




export default Planets