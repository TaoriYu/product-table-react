import * as React from 'react';

interface Ip {
  changeSearchText: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  checkStocked: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
interface Is {}

class SearchBar extends React.Component <Ip, Is> {
  render() {
    return(
      <form>
        <input type="text"
               placeholder="search..."
               onChange={this.props.changeSearchText}
        />
        <p>
          <input type="checkbox"
                 onChange={this.props.checkStocked}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;