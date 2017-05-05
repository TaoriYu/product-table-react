import * as React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import {Product} from './index';

interface Ip {
  products: Array<Product>;
}
interface Is {
  searchText: string;
  onlyStocked: boolean;
}

class FilterableProductTable extends React.Component <Ip, Is> {
  constructor() {
    super();
    this.state = {
      searchText: '',
      onlyStocked: false,
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleCheckStocked = this.handleCheckStocked.bind(this);
  }

  handleChangeSearch(e: React.SyntheticEvent<HTMLInputElement>): void  {
    this.setState({
      searchText: e.currentTarget.value,
    });
  }

  handleCheckStocked(e: React.SyntheticEvent<HTMLInputElement>): void {
    this.setState({
      onlyStocked: e.currentTarget.checked,
    });
  }

  render() {
    return (
      <div>
        <SearchBar changeSearchText={this.handleChangeSearch}
                   checkStocked={this.handleCheckStocked}
        />
        <ProductTable products={this.props.products}
                      searchText={this.state.searchText}
                      onlyStocked={this.state.onlyStocked}
        />
      </div>
    );
  }
}

export default FilterableProductTable;