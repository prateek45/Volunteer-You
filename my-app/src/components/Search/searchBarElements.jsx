import React from "react";
import "./style.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons";
import {Redirect} from "react-router-dom";
import "antd/dist/antd.css";import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export class SearchBar extends React.Component{
    //Constructor function
    constructor(props) {
        super(props);
        //Set three variables as states: the type of sort, the search value and an indicator of whether they have searched.
        this.state = {
            sort: "name",
            value: "",
            searched: 0
        }
        //Bind functions to this.
        this.redirect = this.redirect.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.updateSort = this.updateSort.bind(this);
    }

    //Function that indicates the user has selected the search button.
    redirect(e) {
        e.preventDefault();
        this.setState({
            searched: 1
        })
        this.forceUpdate();
    }

    //Function for when the user is modifying their search input, makes sure 
    //app does not think user it still searching.
    updateSearch(e) {
        this.setState({
            searched: 0,
            value: e.target.value
        })
    }

    //Function to update sort Type, makes sure 
    //app does not think user it still searching.
    updateSort(e) {
        this.setState({
            searched: 0,
            sort: e.target.value
        })
    }

    render(){
        //Return HTML Content.
        //IconContext.Provider modifies size of reactIcon.
        //When this.state.search == 1 (ie users click the search button), app will redirect to search page and append search value and sort type to url.
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
                    <div className='searchSubmit' >
                        <button type="submit" onClick = {this.redirect} icon={<SearchOutlined />}>Search</button>
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