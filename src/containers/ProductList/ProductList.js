import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";

import { brandFilter } from "../../pipes/brandFilter";
import { orderByFilter } from "../../pipes/orderByFilter";
import { paginationPipe } from "../../pipes/paginationFilter";

class ProductList extends Component {
  state = {
    colValue: "col-lg-4",
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    gridValue: 3,
  };

  changeLayout = (n) => {
    this.setState({ gridValue: n });

    let realGridValue;

    if (n === 4) {
      realGridValue = 3;
    } else {
      realGridValue = 4;
    }

    this.setState({
      colValue: `col-lg-${realGridValue}`,
    });
  };

  onPrev = () => {
    const updatedState = { ...this.state };
    updatedState.currentPage = this.state.currentPage - 1;
    this.setState(updatedState);
  };

  onNext = () => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1,
    });
  };

  goPage = (n) => {
    this.setState({
      ...this.state,
      currentPage: n,
    });
  };

  render() {
    return (
      <div className="col-lg-9">
        <div className="row mb-3">
          <div className="col-12 d-none d-lg-block d-xl-block">
            <div className="card ">
              <div className="card-header d-flex justify-content-end">
                <span className="mr-3">Cambiar Layout: </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {paginationPipe(this.props.products, this.state).map((product) => {
            let classes = `${this.state.colValue} col-md-6 mb-4`;
            return (
              <div className={classes} key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-end"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const brands = state.brandFilter;
  const orderBy = state.orderBy;

  const filterByBrandArr = brandFilter(state.shop.products, brands);
  const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);

  return { products: filterByOrderArr };
};

export default connect(mapStateToProps, null)(ProductList);
