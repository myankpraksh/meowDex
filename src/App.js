import React, { Component } from "react";
import { CardList } from "./CardList";
import { cats } from "./catsData";
import SearchBox from "./SearchBox";
import "./App.css"
import Scrollable from "./Scrollable";
class App extends Component {
  constructor() {
    super();
    this.state = {
        // cats : [],
        cats : cats,
        searchField : "" 
    };
  }

  onSearchChange = (event) =>
{
  this.setState({searchField : event.target.value})  
};
// componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=> response.json())
//     .then((response)=>{this.setState({cats:response})});
// }
  render() {
    const filteredCats = this.state.cats.filter(
        (cat)=>{return cat.name.toLocaleLowerCase().includes(this.state.searchField)}
    );
  
    return (
      <div className="tc">
        <h1 className="f-subheadline lh-title">MeoDex</h1>
        <SearchBox prop={this.onSearchChange}/>
        <Scrollable>
        <CardList props={filteredCats} />
        </Scrollable>
      </div>
    );
  }
}

export default App;
