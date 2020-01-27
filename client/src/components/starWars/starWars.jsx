import React, { Component } from "react";
import { connect } from "react-redux";
import { getStarWarsData } from "./starWarsAction";
import StarWarsCard from "./starWarsCard";

class starWars extends Component {
  componentDidMount() {
    this.props.getStarWarsData();
  }
  render() {
    return (
      <div className="d">
        <h1>starwars component</h1>
        <h1>there are {this.props.count} starWars characters</h1>
        <StarWarsCard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.starWarsReducer.starWarsData.count
});

export default connect(mapStateToProps, { getStarWarsData })(starWars);
