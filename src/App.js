import "./App.css";
import { PerfumeList } from "./components/PerfumeList/PerfumesList";
import { Header } from "./components/Header/Header";
import { FavoritesList } from "./components/Favorites/Favorites";

class App extends Component {
  state = {
    perfumes: [],
    favorites: [],
  };

  componentDidMount() {
    getPerfumesAPI()
      .then((data) => {
        this.setState({ perfumes: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addToFavorites = (perfume) => {
    this.setState((prevState) => ({
      favorites: [...prevState.favorites, perfume],
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FavoritesList favorites={this.state.favorites} />
        <PerfumeList />
      </div>
    );
  }
}

export default App;
