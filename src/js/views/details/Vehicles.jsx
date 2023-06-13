import React, {useContext, useEffect, useState} from "react"
import { useParams } from "react-router"
import { Context } from "../../store/appContext"

const Vehicles= ()=> {
    const { store, actions } = useContext(Context)
    const {id} = useParams()
    const [vehicleDetail, setVehicleDetail] = useState({})
    
    useEffect(() => {
        const vehicle = store.vehicles.find(vehicle => vehicle.uid == id)
        setVehicleDetail(vehicle)
    },[store.vehicles])

    return(
        <div className="container">
            <div className="row d-flex justify-content-center m-5">
                <img 
                src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} 
                className="img-description col-5" 
                alt={vehicleDetail.properties?.name}
                />
                <div className="description col-4 text-white">
                    <h1>{vehicleDetail.properties?.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum doloremque nobis, molestiae ipsa natus illo nulla quae nisi magni fuga odio error totam eligendi quas amet excepturi ratione blanditiis!</p>
                    <p className="fw-bolder">Model</p>
                    <p>{vehicleDetail.properties?.model}</p>
                    <p className="fw-bolder">Cost In Credits</p>
                    <p>{vehicleDetail.properties?.cost_in_credits}</p>
                    <p className="fw-bolder">Passengers</p>
                    <p>{vehicleDetail.properties?.passengers}</p>
                    <p className="fw-bolder">Length</p>
                    <p>{vehicleDetail.properties?.length}</p>
                    <p className="fw-bolder">Vehicle Class</p>
                    <p>{vehicleDetail.properties?.vehicle_class}</p>
                </div>                
            </div>              
        </div>
    )
}




export default Vehicles