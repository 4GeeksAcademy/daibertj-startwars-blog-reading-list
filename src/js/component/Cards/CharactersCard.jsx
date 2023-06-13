import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";


const CharactersCard = ({character})=> {
    const { store, actions } = useContext(Context)    
    let {properties} = character
      return(
        <div className="card ps-3 pe-3 pt-3" style={{minWidth: "18rem"}}>
          <img 
            src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
            className="card-img-top" 
            alt={properties.name}
          />
          <div className="card-body ">
            <h5 className="card-title">{properties.name}</h5>            
            <p className="card-text">Gender: {properties.gender}</p>
            <p className="card-text">Hair Color: {properties.hair_color}</p>
            <p className="card-text">Eye Color: {properties.eye_color}</p>
            <div className="d-flex justify-content-between">
              <Link to={`character/${character.uid}`} className="btn btn-dark bg-black"><b>Learn more!</b></Link>
              <button
                className= "btn btn-dark bg-black fa-solid fa-heart"          
                onClick={() => actions.getUpdateFavorite(character)}
              ></button>
            </div>
          </div>
        </div>
      )
}


export default CharactersCard