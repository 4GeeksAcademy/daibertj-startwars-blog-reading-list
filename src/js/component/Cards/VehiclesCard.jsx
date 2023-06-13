import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";


const VehiclesCard = ({vehicle})=> {
    const { store, actions } = useContext(Context)

    let {properties} = vehicle
      return(
        <div className="card p-3" style={{minWidth: "18rem"}}>
          <img 
            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} 
            className="card-img-top" 
            alt={properties.name}
          />
          <div className="card-body">
            <h5 className="card-title">{properties.name}</h5>
            <p className="card-text">Model: {properties.model}</p>
            <p className="card-text">Passengers: {properties.passengers}</p>
            <p className="card-text">Cost: {properties.cost_in_credits}</p>
            <div className="d-flex justify-content-between">
              <Link to={`vehicle/${vehicle.uid}`} className="btn btn-dark bg-black"><b>Learn more!</b></Link>
              <button
                className="btn btn-dark bg-black fa-solid fa-heart"            
                onClick={(e) => actions.getUpdateFavorite(vehicle)}
              ></button>
            </div>
          </div>
        </div>)
}


export default VehiclesCard