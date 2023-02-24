import React from 'react';
import { apiContext } from './recherchefilm';
import { useContext } from 'react';

function Infos() {
    const cont = useContext(apiContext)

    return (

        (
        <div id="infos">
            <div id="blockDescription" class="blockDescription">
                <div class="posterContainer" id="posterContainer"></div>
                <div class="descriptionContainer">
                    <h3 id="title" class="title">Titre : {cont.donn.Title}</h3>
                    <h4 id="typeResult">Type :{cont.donn.Type}</h4>
                    <h4 id="year">Year : {cont.donn.Year}</h4>
                    <h4 id="country">Country : {cont.donn.Country}</h4>
                    <h4 id="director">Director : {cont.donn.Director}</h4>
                    <h4 id="genre">Genre : {cont.donn.Genre}</h4>
                    <h4 id="runtime">Duration : {cont.donn.Runtime}</h4>
                    <h4 id="rating">Rating : {cont.donn.imdbRating}</h4>
                    <h4 id="votes">Votes : {cont.donn.imdbVotes}</h4>
                    <p id="actors">Actors : {cont.donn.Actors}</p>
                    <p id="description">{cont.donn.Plot}</p>
                </div>
                <img src={cont.donn.Poster} />

            </div>
        </div>)


    )
}

export default Infos;