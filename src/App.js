import './App.css';
import { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/searchbox/searchbox.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monster:[
        // {
        //   name:"Frankstein",
        //   id:"asc1"
        // },
        // {
        //   name:"Venom",
        //   id:"asc2"
        // },
        // {
        //   name:"Goosebumps",
        //   id:"asc3"
        // }
      ],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>this.setState({monster:users}));
    
  }

  handleChange = event =>{
    this.setState({searchField : event.target.value});
  }

  render(){
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter( monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return(
      <div className='App'>
        <h1>Monsters Friends</h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange} />
        <CardList monsters={filteredMonster}/>
        {/* {this.state.monster.map((monster)=>{return <p key={monster.id}>{monster.name}</p>})} */}
      </div>
    );
  }
}

export default App;
