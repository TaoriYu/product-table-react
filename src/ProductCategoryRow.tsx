import * as React from 'react';

interface Ip {
  category: string;
}
interface Is {}

class ProductCategoryRow extends React.Component <Ip, Is> {
  render() {
    return(
      <tr>
        <th colSpan={5}>{this.props.category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;