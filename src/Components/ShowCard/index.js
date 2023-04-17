import React from "react";
import './style.css';

export const ShowCard=(props)=>{
   
    let myId = 0;
    const myItem = props.data;
    const mystr = (myItem.show.summary).replace(/(<([^>]+)>)/ig, '')
    let myrating = "Not Rated";
    let mygenere = ["No Genre"]
    if(myItem.show.genres.length !== 0){
        mygenere = myItem.show.genres;
    }
    if(myItem.show.rating != null && myItem.show.rating.average != null){
        myrating = myItem.show.rating.average + "⭐";
    }
    let mysrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XjbehGHCGl7r8uilFK5e2xswXnqhUtsRxA&usqp=CAU";
    if(myItem.show.image != null && myItem.show.image.medium != null){
        mysrc = myItem.show.image.medium;
    }
    return(
        <div className="showcard">
            <p className="increseheight">{mygenere.map((item)=>{
            return <span className="genre" key={myId++}>{item + " "}</span>;
         })}</p>
         <img src={mysrc} alt={"movie"}></img>
         <p className="title">{myItem.show.name} </p>
         <p className="rating">{myrating}</p>
         <p className="description">{mystr}</p>
        </div>
    )
}