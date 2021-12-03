import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {keyword: ''};
    }
    handleChange = (event) => 
      {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit = (event) =>
      {
        // alert(this.state.keyword);
        event.preventDefault();
       
        window.keyword = this.state.keyword;
        this.props.setKeyword(this.state.keyword);
        //this.state.keyword='';
      }


    render() {
        return (
            <label >
            <form onSubmit={this.handleSubmit}>
                <input className="search-bar" type="search" value={this.state.keyword} onChange={this.handleChange} name="keyword" placeholder="What are you looking for?" />
                </form>
              </label>
        );
    }
}

export default Search;