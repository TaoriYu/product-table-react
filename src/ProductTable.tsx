import * as React from 'react';
import * as R from 'ramda';
import {Product} from './index';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface Ip {
  products: Array<Product>;
  searchText: string;
  onlyStocked: boolean;
}
interface Is {}

type sortedProps = { [p: string]: Array<Product> };

class ProductTable extends React.Component <Ip, Is> {
  private sortedProps: sortedProps;

  constructor(props: Ip) {
    super(props);
    this.set_sorted_props(this.props.products, '', true);
  }

  componentWillReceiveProps(nextProps: Ip) {
    this.set_sorted_props(nextProps.products, nextProps.searchText, nextProps.onlyStocked);
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th colSpan={5}>Name</th>
            <th colSpan={1}>Price</th>
          </tr>
        </thead>
        {Object.keys(this.sortedProps).map((value: string) => {
          return(
            <tbody key={value}>
              <ProductCategoryRow category={value} />
              {this.sortedProps[value].map((product) => {
                return (<ProductRow product={product} key={product.name} />);
              })}
            </tbody>
          );
        })}
      </table>
    );
  }

  // this.sortedProps = R.pipe<Array<Product>, Array<Product>, sortedProps>(
  //   R.filter(({name}: Product) => !!R.match(new RegExp(searchText, 'i'), name)),
  //   R.groupBy(({category}: Product) => category)
  // )(products)

  private set_sorted_props(products: Array<Product>, searchText: string, onlyStocked: boolean): void {
    this.sortedProps = R.pipe<Array<Product>, Array<Product>, sortedProps>(
      R.filter(({name}: Product) => !!R.match(new RegExp(searchText, 'i'), name)),
      R.groupBy(({category}: Product) => category)
    )(products);
  }
}

export default ProductTable;