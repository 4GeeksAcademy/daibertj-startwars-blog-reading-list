import React, { useContext } from "react";
import { Context } from "../store/appContext"
import  CharactersCard  from "../component/Cards/CharactersCard.jsx"
import PlanetsCard from "../component/Cards/PlanetsCard.jsx";
import VehiclesCard from "../component/Cards/VehiclesCard.jsx";

const Home = () => {
    const { store, actions } = useContext(Context)
    return(
        <>
        <div className="container"> 
        <h1 className="text-white d-flex justify-content-center">Characters</h1>
        <div className="carousel d-flex">            
            {store.people.map((character) => {
                return <CharactersCard key={character._id} character={character}/>
            })}
        </div>
        <h1 className="d-flex justify-content-center pt-3 text-white">Planets</h1>
        <div className="carousel d-flex">
            {store.planets.map((planet)=>{
                return <PlanetsCard key={planet._id} planet={planet}/>
            })}
        </div>
        <h1 className="d-flex justify-content-center pt-3 text-white">Vehicles</h1>
        <div className="carousel d-flex">
            {store.vehicles.map((vehicle)=>{
                return <VehiclesCard key={vehicle._id} vehicle={vehicle}/>
            })}
        </div>
        </div>
        </>
    )
}

export default Home