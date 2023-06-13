import React, { useContext } from "react";
import rigoImageUrl from "../../../img/Tatooine_TPM.webp"
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";


const PlanetsCard = ({planet})=> {
    const { store, actions } = useContext(Context)
    let {properties} = planet
      return(
        <div className="card p-3" style={{minWidth: "18rem"}}>
          <img src={
            planet.uid !=1
            ? `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg` 
            : rigoImageUrl}
            className="card-img-top" 
            alt={properties.name}
          />
          <div className="card-body">
            <h5 className="card-title">{properties.name}</h5>
            <p className="card-text">Population: {properties.population}</p>
            <p className="card-text">Terrain: {properties.terrain}</p>   
            <div className="d-flex justify-content-between">    
              <Link to={`planet/${planet.uid}`} className="btn btn-dark bg-black"><b>Learn more!</b></Link>
              <button
                className="btn btn-dark bg-black fa-solid fa-heart"            
                onClick={(e) => actions.getUpdateFavorite(planet)}
              ></button>
            </div>
          </div>
        </div>)
}


export default PlanetsCard






