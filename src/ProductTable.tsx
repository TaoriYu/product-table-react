import * as React from 'react';
import * as R from 'ramda';
import {Product} from './index';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import {HTMLProps} from 'react';
import ReactCSSTransitionGroup = require('react-addons-css-transition-group');

interface Ip extends HTMLProps<HTMLTableElement> {
  products: Array<Product>;
  searchText: string;
  onlyStocked: boolean;
}
interface Is {}

type sortedProps = { [p: string]: Array<Product> };

class ProductTable extends React.Component <Ip, Is> {
  static defaultProps = {
    className: ''
  };

  private sortedProps: sortedProps;

  constructor(props: Ip) {
    super(props);
    this.set_sorted_props(this.props.products, '', this.props.onlyStocked);
  }

  componentWillReceiveProps(nextProps: Ip) {
    this.set_sorted_props(nextProps.products, nextProps.searchText, nextProps.onlyStocked);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'in',
          leave: 'out'
        }}
        transitionEnterTimeout={280}
        transitionLeaveTimeout={280}
        component="table"
        className={`ui very basic table ${this.props.className}`}
      >
        <thead className="ui animating transition fade right" key="head">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {Object.keys(this.sortedProps).map((value: string) => {
          return(
            <ReactCSSTransitionGroup
              transitionName={{
                enter: 'in',
                leave: 'out'
              }}
              transitionEnterTimeout={280}
              transitionLeaveTimeout={280}
              component="tbody"
              className="ui animating transition fade right"
              key={value}
            >
              <ProductCategoryRow category={value} key={value} />
              {this.sortedProps[value].map((product) => {
                return (
                  <ProductRow product={product}
                              key={product.name}
                  />
                );
              })}
            </ReactCSSTransitionGroup>
          );
        })}
      </ReactCSSTransitionGroup>
    );
  }

  private set_sorted_props(products: Array<Product>, searchText: string, onlyStocked: boolean): void {
    this.sortedProps = R.pipe<Array<Product>, Array<Product>, Array<Product>, sortedProps>(
      R.filter(({stocked}: Product) => stocked === onlyStocked || !onlyStocked),
      R.filter(({name}: Product) => !!R.match(new RegExp(searchText, 'i'), name).length),
      R.groupBy(({category}: Product) => category)
    )(products);
  }
}

export default ProductTable;