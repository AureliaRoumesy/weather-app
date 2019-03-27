import React, { Component } from "react";

class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: ''
    };
  }
  submitHandler = (evt) => {
    evt.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.searchFN(this.state.searchCity);

    this.setState({
      searchCity: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      searchCity: event.target.value
    });
  }

  render() {
    return (
      <div className="input-group mb-3 ml-5" style={{ width: '18rem' }}>
        <form onSubmit={this.submitHandler} className="d-flex">
          <input type="text"
            id="searchCity"
            placeholder="Ville"
            value={this.state.searchCity}
            onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchButton;