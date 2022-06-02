import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => setMonsters(monsters));
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = event => {
    const searchStringField = event.target.value.toLocaleLowerCase();
    setSearchField(searchStringField);
  };

  return (
    <div className="App">
      <h1 className="top-title">monsters rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="search monster"
        onChange={onSearchChange}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(monsters =>
//         this.setState(() => {
//           return {
//             monsters,
//           };
//         })
//       );
//   }

//   onSearchChange = event => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const filterMonsters = this.state.monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="top-title">monsters rolodex</h1>
//         <SearchBox
//           className="search-box"
//           placeholder="search monster"
//           onChange={this.onSearchChange}
//         />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

export default App;
