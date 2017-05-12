import * as React from 'react';

interface Ip {
  category: string;
}
interface Is {}

class ProductCategoryRow extends React.Component <Ip, Is> {
  render() {
    return(
      <tr className="active">
        <th>{this.props.category}</th>
        <th className="active"/>
      </tr>
    );
  }
}

export default ProductCategoryRow;