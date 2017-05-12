import * as React from 'react';

interface Ip {
  changeSearchText: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  checkStocked: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
interface Is {}

class SearchBar extends React.Component <Ip, Is> {
  private textInput: HTMLInputElement;

  constructor(props: Ip) {
    super(props);
  }

  public focus() {
    this.textInput.focus();
  }

  render() {
    return(
      <form className="ui form">
        <div className="field">
          <input type="text"
                 placeholder="search..."
                 onChange={this.props.changeSearchText}
                 ref={(ref) => this.textInput = ref}
          />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox"
                   onChange={this.props.checkStocked}
            />
            <label>Only show products in stock</label>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;