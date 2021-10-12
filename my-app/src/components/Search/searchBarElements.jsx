import React from "react";
import "./style.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons";


export class SearchBar extends React.Component{
    render(){
        return(
            <IconContext.Provider
                value={{ size: '100%'}}
            >
                <div id="Searchbar">
                    <div id="searchIcon"> <AiOutlineSearch /> </div>
                    <div id="searchInput">
                        <input type="text" required="required" placeholder="Search for events here" name="searchText" id = "searchText"></input> 
                    </div>
                    <div id="searchList"> 
                        <h1> Sort By </h1>
                        <select id = "searchMenu">
                            <option value = "name">Name</option>
                            <option value = "location">Location</option>
                            <option value = "slots"> Available Slots</option>
                        </select>
                    </div>
                    <div id="searchSubmit">
                        <button id="searchBut" type="submit">Search</button> 
                    </div>
                </div>
            </IconContext.Provider>
        )
    }     
}