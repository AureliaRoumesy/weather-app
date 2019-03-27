import React, { Component } from 'react';

class SearchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
    );
  };
}

export default SearchButton