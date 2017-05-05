import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './FilterableProductTable';

export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

let products: Array<Product>;

products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.getElementById('root') as HTMLElement
);

