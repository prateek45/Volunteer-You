import React from "react";
import "./style.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons";
import {Redirect} from "react-router-dom";

export class SearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            sort: "name",
            value: "",
            searched: 0
        }
        this.redirect = this.redirect.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.updateSort = this.updateSort.bind(this);
    }

    redirect(e) {
        e.preventDefault();
        this.setState({
            searched: 1
        })
    }

    updateSearch(e) {
        this.setState({
            searched: 0,
            value: e.target.value
        })
    }

    updateSort(e) {
        this.setState({
            searched: 0,
            sort: e.target.value
        })
    }

    render(){
        return(
            <IconContext.Provider
                value={{ size: '100%'}}
            >
                <div id="Searchbar">
                    <div id="searchIcon"> <AiOutlineSearch /> </div>
                    <div id="searchInput">
                        <input type="text" required="required" placeholder="Search for events here" name="searchText" id = "searchText" onChange= {this.updateSearch}></input> 
                    </div>
                    <div id="searchList"> 
                        <h1> Sort By </h1>
                        <select id = "searchMenu" onChange = {this.updateSort}>
                            <option value = "name">Name</option>
                            <option value = "location">Location</option>
                            <option value = "slots"> Available Slots</option>
                        </select>
                    </div>
                    <div id="searchSubmit">
                        <button id="searchBut" type="submit" onClick = {this.redirect}>Search</button> 
                    </div>
                    {this.state.searched === 1 && 
                        <Redirect to={{
                            pathname: '/search/'+this.state.value+'?'+this.state.sort,                            
                        }}                            
                        />
                    }
                </div>
            </IconContext.Provider>
        )
    }     
}

