import * as React from 'react';
import {Product} from './index';

interface Ip {
  product: Product;
  key: string;
}
interface Is {}

let name: JSX.Element;

class ProductRow extends React.Component <Ip, Is> {
  render() {
    name = <span className={this.props.product.stocked ? '' : 'red'}>{this.props.product.name}</span>;

    return(
      <tr>
        <td colSpan={5}>{name}</td>
        <td colSpan={1}>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;