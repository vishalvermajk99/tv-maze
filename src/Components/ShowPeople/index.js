import React from "react";
import './style.css';

function ShowPeople({data}){

    let countryname = "Country unavailable";
    let myimage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XjbehGHCGl7r8uilFK5e2xswXnqhUtsRxA&usqp=CAU";
    if(data.person.image != null && data.person.image.medium != null){
        myimage = data.person.image.medium;
    }
    if(data.person.country != null && data.person.country.name != null){
        countryname = data.person.country.name
    } 
    return(
      <div className="peopleCard">
      <img src={myimage} alt={"movie"}></img>
      <p>{data.person.name}</p>
      <p>{countryname}</p>
      </div>
    )
}

export default ShowPeople;