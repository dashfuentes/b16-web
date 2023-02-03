import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { CHARACTERS } from "./graphql/Queries";

export const Home = () => {

    const[characters,setcharacters] = useState("")

	useEffect(() => {
		//before render get the character from the API
        getCharacters().then( response => {
           //create a clean array of data
            var data = response.data.characters.results;
            //set the clean information to the state
            setcharacters(data)
            console.log( 'data', data )

        });
    }, [] );
    
	const [getCharacters, { data, error }] = useLazyQuery(CHARACTERS);

	if (error) return <h1>Error {error}</h1>;
	if (data) {
		//console.log(data);
	}
	return (
		<div className ="bg-slate-100 flex flex-wrap w-full">
            {characters && 
                characters.map( ( { id, name, gender } ) => (
                    <div data-id={id} className="child-content w-28 h-28">
                        <h3>Name:<span>{name }</span></h3>
                        <p>Gender:<span>{ gender}</span></p>
					</div>
                ))	
			}
		</div>
	);
};
