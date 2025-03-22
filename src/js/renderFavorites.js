import { getFavoritesAPI } from "../api/getFavoritesAPI";
import { addPerfume } from "./addPerfume";

export class Favorites extends Component {
  state = {
    favorites: [],
  };

  componentDidMount() {
    getFavoritesAPI().then((favorites) => this.setState({ favorites }));
  }

  handleAdd = (event) => {
    const newPerfume = addPerfume(event);
    this.setState((prevState) => ({
      favorites: [...prevState.favorites, newPerfume],
    }));
  };

  render() {
    return (
      <div>
        <h2>Favorites</h2>
        <ul>
          {this.state.favorites.map((perfume) => (
            <li key={perfume.id}>
              <h2>{perfume.title}</h2>
              <p>{perfume.price}</p>
              <img src={perfume.photo} alt={perfume.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
