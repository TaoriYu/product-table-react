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
      <tr className="transition animating fade right">
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;