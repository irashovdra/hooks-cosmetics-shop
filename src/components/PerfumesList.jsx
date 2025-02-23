import { Perfume } from "./Perfume";
import { Component } from "react";
import axios, { isCancel, AxiosError } from "axios";

export class PerfumeList extends Component {
  state = {
    perfumes: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://67bb7b18fbe0387ca13a2e9e.mockapi.io/parfumes"
    );
    this.setState({ perfumes: response.data });
  }

  render() {
    return (
      <ul className="perfumes">
        {this.state.perfumes.map((perfume) => {
          <Perfume {...perfume} />;
        })}
      </ul>
    );
  }
}
